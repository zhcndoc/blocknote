import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";

export interface WelcomeEmailProps {
  name?: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>BlockNote - 下一步与订阅</Preview>
        <Container style={container}>
          <Img
            src="https://blocknote.zhcndoc.com/img/logos/icon_light_500.png"
            width="40"
            height="40"
            alt="BlockNote"
          />
          <Section>
            <Text style={text}>你好{name ? ` ${name}` : ""}，</Text>
            <Text style={text}>感谢你完成邮箱验证，欢迎来到 BlockNote！</Text>
            <Text style={text}>
              下一步，你可以订阅 BlockNote 套餐以解锁更多功能。订阅商业版后，
              你将获得 XL 扩展包许可。所有付费套餐也都会通过 GitHub 获得更高
              优先级的问题支持。
            </Text>
            <Link style={button} href="https://blocknote.zhcndoc.com/pricing">
              查看套餐并订阅
            </Link>
            <Text style={text}>感谢你对我们开源项目的支持！</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  name: "Alex",
} as WelcomeEmailProps;

export default WelcomeEmail;

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
  width: "230px",
  padding: "14px 7px",
  marginTop: "20px",
};
