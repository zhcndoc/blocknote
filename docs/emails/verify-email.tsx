import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export interface VerifyEmailProps {
  name?: string;
  url?: string;
}

export const VerifyEmail = ({ name, url }: VerifyEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>BlockNote - 验证你的邮箱地址</Preview>
        <Container style={container}>
          <Img
            src="https://blocknote.zhcndoc.com/img/logos/icon_light_500.png"
            width="40"
            height="40"
            alt="BlockNote"
          />
          <Section>
            <Text style={text}>你好{name ? ` ${name}` : ""}，</Text>
            <Text style={text}>
              感谢注册 BlockNote！为了完成注册，请点击下方按钮验证你的邮箱地址：
            </Text>
            <Button style={button} href={url}>
              验证邮箱
            </Button>
            <Text style={text}>
              如果你没有创建 BlockNote 账号，可以放心忽略这封邮件。
            </Text>
            <Text style={text}>
              为了确保账号安全，请不要将这封邮件转发给任何人。
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

VerifyEmail.PreviewProps = {
  name: "",
  url: "https://blocknotejs.org",
} as VerifyEmailProps;

export default VerifyEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};
