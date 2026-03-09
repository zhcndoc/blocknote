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

export interface MagicLinkEmailProps {
  name?: string;
  url?: string;
}

export const MagicLinkEmail = ({ name, url }: MagicLinkEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>BlockNote - 登录你的账号</Preview>
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
              刚刚有人为你的 BlockNote 账号请求了一封魔法链接邮件。如果是你
              本人操作，可以通过下面的按钮登录：
            </Text>
            <Button style={button} href={url}>
              登录
            </Button>
            <Text style={text}>
              如果你不想登录，或这不是你的操作，直接忽略并删除这封邮件即可。
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

MagicLinkEmail.PreviewProps = {
  name: "",
  url: "https://blocknotejs.org",
} as MagicLinkEmailProps;

export default MagicLinkEmail;

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

const anchor = {
  textDecoration: "underline",
};
