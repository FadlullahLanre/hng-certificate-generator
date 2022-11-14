
# HNG Certificate Generator
A certificate generator API that can generate and send certificates to uploaded csv lists.
This is a repo created by group 3 backend interns in team headlight for HNG stage 3 task

### API Reference

#### make a post request of your csv file
```http
POST https://hng-certificate-generator-production.up.railway.app/api/v1/upload
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `csv` | `file type` | **Required**. Your key must be csv |

# Note

### Your csv file must have the following fields
- Name 
- CERTIFICATE_NUMBER
- DATE


## Run Locally

Clone the project

```bash
  git clone https://github.com/FadlullahLanre/hng-certificate-generator
```

Go to the project directory

```bash
  cd hng-certificate-generator
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Contributors

- [@fadlullahlanre](https://github.com/FadlullahLanre)
- [@abdulkabirSultan](https://github.com/abdulkabirsultan)
- [@ubanilsaac](https://github.com/ubaniIsaac)
- [@samad13](https://github.com/samad13)
