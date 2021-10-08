import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  InputProps,
  Textarea,
} from "@chakra-ui/react"

type FieldProps = InputProps & {
  isInvalid?: boolean
  isRequired?: boolean
  label?: string
  helperText?: string
  errorText?: string
  textArea?: boolean
  onChange?: (value: string) => void
}

export function Field({
  label,
  onChange,
  helperText,
  errorText,
  isInvalid,
  isRequired,
  value,
  textArea,
  ...props
}: FieldProps) {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      {!textArea ? (
        <Input
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
          {...props}
        />
      ) : (
        <Textarea
          onChange={(e) => onChange && onChange(e.target.value)}
          value={value}
          placeholder={props?.placeholder}
        />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
    </FormControl>
  )
}
