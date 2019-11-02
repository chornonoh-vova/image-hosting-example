import fs from 'fs';

export default function makeCallback(controller) {
  return (req, res) => {
    const request = {
      body: req.body,
      params: req.params,
      file: req.file,
    };

    console.log(request);

    controller(request)
        .then(response => {
          if (response.headers) {
            res.set(response.headers);
          }

          if (response.body) {
            res.status(response.statusCode).send(response.body);
          } else if (response.file) {
            res.status(response.statusCode);
            fs.createReadStream(response.file).pipe(res);
          }
        })
        .catch(error => {
          console.log(error);
          res.status(500).send({error});
        });
  };
}
