# nestjs-aws-s3-localstack-upload

## Installation and usage

1. `docker-compose up -d`
2. `docker exec -it localstack bash`
3. `awslocal s3api create-bucket --bucket test`
4. `awslocal iam create-user --user-name admin`
5. `awslocal iam create-access-key --user-name admin`
6. Update `.env` file with your AWS credentials

How to get AWS_S3_GATEWAY variable:
1. `cat /etc/hosts` and find ip address of current container