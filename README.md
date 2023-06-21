# [AWS Serverless SaaS Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/b0c6ad36-0a4b-45d8-856b-8a64f0ac76bb/en-US/lab3/41-initialize-lab)

# Sequence Diagram
![Sequence Diagram](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/Guo-astro/multi-tenant-saas/main/infra-template/diagrams/tenant-design-themed.puml)




# Notes
- Whenever the code changed under TenantPipeline, just run ./deployment.sh email. The tenant-buildspec.yaml is used in CDK  (serverless-saas-stack.ts) to define the codebuild stage.
- The codebuild phase will create tenant specified resources/services.
- lambda-deploy-tenant-stack.py is used in the deploy stage of codepipeline that is going to check the tenant dynamodb table for cfn state.

# License
The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.

The sample code within this documentation is made available under the MIT-0 license. See the LICENSE-SAMPLECODE file.
