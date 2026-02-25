import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
require('dotenv').config();
export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const defaultVpc = ec2.Vpc.fromLookup(this, 'VPC', {
      isDefault: true,
    });

    const everestKeyPair = new ec2.KeyPair(this, "myKeyValuePair", {
      keyPairName: "everest-key-pair",
    })

    const everstEc2Sg = new ec2.SecurityGroup(this, "EC2-instance-sg", {
      vpc: defaultVpc,
      allowAllOutbound: true
    })

    everstEc2Sg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      "SSH"
    );

    everstEc2Sg.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(3011),
      "Allow app server"

    )

    new ec2.Instance(this, 'users', {
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO,
      ),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      vpc: defaultVpc,
      keyPair: everestKeyPair,
      securityGroup: everstEc2Sg,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC }
    });
  }
}