import { useEffect, useState } from "react";
import ReactNativeModal from "react-native-modal";
import { Button } from "../button";
import { CloseButton, Content, Footer, Header, Icon, Title } from "./styles";
import { Props } from "./types";

export function Modal({
  title,
  secondaryButton,
  primaryButton,
  children,
  isVisible: defaultIsVisible,
  onToggle,
  ...rest
}: Props) {
  const [isVisible, setIsVisible] = useState(defaultIsVisible);

  useEffect(() => {
    onToggle(isVisible);
  }, [isVisible, onToggle]);

  useEffect(() => {
    setIsVisible(defaultIsVisible);
  }, [defaultIsVisible]);

  const hasFooter = !!(secondaryButton || primaryButton);

  function handleClose() {
    setIsVisible(false);
  }

  return (
    <ReactNativeModal
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.5}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      isVisible={isVisible}
    >
      <Header>
        <Title>{title}</Title>

        <CloseButton onPress={handleClose}>
          <Icon name="close" size={25} />
        </CloseButton>
      </Header>

      <Content hasFooter={hasFooter}>{children}</Content>

      {hasFooter && (
        <Footer>
          {secondaryButton?.children && (
            <Button appearance="secondary" size="small" {...secondaryButton}>
              {secondaryButton.children}
            </Button>
          )}
          {primaryButton?.children && (
            <Button appearance="primary" size="small" {...primaryButton}>
              {primaryButton.children}
            </Button>
          )}
        </Footer>
      )}
    </ReactNativeModal>
  );
}
