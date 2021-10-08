import { GridItem, Grid, Button, Flex } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"

import { Field } from "../../components"

export const Form = () => {
  const history = useHistory()

  const schema = Yup.object().shape({
    email: Yup.string().required("Obrigatório"),
    password: Yup.string().required("Obrigatório"),
  })
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={() => {
        history.push("/home")
      }}
    >
      {({ values, setFieldValue, handleSubmit, errors }) => {
        return (
          <Grid width='80%' gap={7}>
            <GridItem>
              <Field
                id='email'
                label='Login:'
                name='email'
                value={values?.email}
                onChange={(value) => setFieldValue("email", value)}
                helperText={errors?.email}
                isInvalid={!!errors?.email && true}
              />
            </GridItem>
            <GridItem>
              <Field
                id='password'
                label='Senha:'
                name='password'
                type='password'
                value={values?.password}
                onChange={(value) => setFieldValue("password", value)}
                helperText={errors?.password}
                isInvalid={!!errors?.password && true}
              />
            </GridItem>
            <Flex justifyContent='center'>
              <Button
                width='50%'
                colorScheme='yellow'
                onClick={() => handleSubmit()}
              >
                Entrar
              </Button>
            </Flex>
          </Grid>
        )
      }}
    </Formik>
  )
}
