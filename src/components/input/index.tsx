import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { colors } from "@/src/theme";

import { Container, Icon, TextInput } from "./styles";
import { ForwardRef, InputProps, Props } from "./types";

const Input: React.ForwardRefRenderFunction<ForwardRef, Props> = (
  {
    icon,
    name,
    style,
    value: initialValue = "",
    onChangeText = () => {},
    ...rest
  },
  ref
) => {
  const inputRef = useRef<InputProps>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChangeText(value);
  }, [value, onChangeText]);

  const handleInputClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef?.current?.focus();
    },
  }));

  return (
    <Container
      onPress={handleInputClick}
      activeOpacity={1}
      {...{ style, isFocused }}
    >
      {icon && (
        <Icon size={20} name={icon} {...{ isFocused, isFilled: !!value }} />
      )}
      <TextInput
        ref={inputRef}
        placeholderTextColor={colors.gray._100}
        value={value}
        onChangeText={handleChangeText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
