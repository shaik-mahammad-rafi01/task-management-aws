import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { User } from "../models/User";


const client = new SNSClient({
    region: process.env.AWS_REGION || "ap-south-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
});

export const sendEmail = async (user: User) => {
    const message = `Hello! A new user has been added successfully: Name: ${user.name} Email: ${user.email} `;

    const command = new PublishCommand({
        TopicArn: process.env.SNS_TOPIC_ARN!,
        Subject: "User registration success",
        Message: message,
    });

    try {
        const response = await client.send(command);
        console.log("SNS Email sent successfully! MessageId:", response.MessageId);
        return response;
    } catch (error) {
        console.error("Error sending SNS email:", error);
        throw error;
    }
};