import { Modal } from "@/components/modal";
import { colors } from "@/theme";
import { useState } from "react";
import { Text } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterLeft,
  FooterLeftIcons,
  FooterLeftText,
  Icon,
  Title,
} from "./styles";
import { Props } from "./types";

export function CuriosityCardDefault({ title, content, ...rest }: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleLike() {
    setIsDisLiked(false);
    setIsLiked((prev) => !prev);
  }

  function handleDisLike() {
    setIsLiked(false);
    setIsDisLiked((prev) => !prev);
  }

  return (
    <>
      <Container {...rest}>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Footer>
          <FooterLeft>
            <FooterLeftIcons>
              <Icon
                size={30}
                onPress={handleLike}
                color={isLiked ? colors.status.success._300 : undefined}
                name={isLiked ? "thumbs-up" : "thumbs-up-outline"}
              />
              <Icon
                size={30}
                onPress={handleDisLike}
                color={isDisLiked ? colors.status.error._300 : undefined}
                name={isDisLiked ? "thumbs-down" : "thumbs-down-outline"}
                style={{ marginRight: "auto" }}
              />
            </FooterLeftIcons>

            <FooterLeftText>10 likes | 5 dislikes</FooterLeftText>
          </FooterLeft>

          <Icon
            size={30}
            name="flag-outline"
            onPress={() => setIsModalVisible(true)}
          />
          <Icon size={30} name="refresh" />
        </Footer>
      </Container>

      <Modal
        title="My title"
        isVisible={isModalVisible}
        onToggle={setIsModalVisible}
        primaryButton={{
          children: "Submit",
          onPress: () => setIsModalVisible(false),
        }}
        secondaryButton={{
          children: "Cancel",
          onPress: () => setIsModalVisible(false),
        }}
      >
        <Text>I'm the modal text</Text>
      </Modal>
    </>
  );
}
