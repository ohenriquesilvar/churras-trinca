import { Flex, Grid, GridItem, Button } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"
import { Field } from "../../../components"
import { useApp } from "../../../context/AppContext"
import { getRandomInt } from "../../../utils"

export const NewChurras = ({ onClose }: { onClose: () => void }) => {
  const { setList } = useApp()
  const schema = Yup.object().shape({
    name: Yup.string().required("Obrigatório"),
    date: Yup.string().required("Obrigatório"),
  })
  return (
    <Formik
      initialValues={{
        name: "",
        date: "",
        description: "",
        observation: "",
        withDrink: "",
        withoutDrink: "",
      }}
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={(values) => {
        const date = values.date.split("-")
        setList({
          ...values,
          date: `${date[2]}/${date[1]}`,
          id: getRandomInt(),
          value: 0,
          participants: 0,
          participantsPaid: 0,
          withoutDrink: Number(values.withoutDrink || "0"),
          withDrink: Number(values.withDrink || "0"),
        })
        onClose && onClose()
      }}
    >
      {({ values, setFieldValue, handleSubmit, errors }) => {
        return (
          <>
            <Grid templateColumns='repeat(2, 1fr)' gap={2}>
              <GridItem colSpan={2}>
                <Field
                  id='name'
                  label='Nome:'
                  name='name'
                  isRequired
                  placeholder='ex: Churras dos amigos'
                  value={values?.name}
                  onChange={(value) => setFieldValue("name", value)}
                  helperText={errors?.name}
                  isInvalid={!!errors?.name && true}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Flex wrap='wrap' width='100%' justifyContent='space-around'>
                  <Flex flex='1' minWidth='200px'>
                    <Field
                      id='date'
                      label='Data:'
                      name='date'
                      type='date'
                      isRequired
                      placeholder='XX-XX-XXXX'
                      value={values?.date}
                      onChange={(value) => setFieldValue("date", value)}
                      helperText={errors?.date}
                      isInvalid={!!errors?.date && true}
                    />
                  </Flex>

                  <Flex flex='1' minWidth='200px'>
                    <Field
                      id='withDrink'
                      label='Valor sugerido c/ bebida:'
                      name='withDrink'
                      type='number'
                      placeholder='30.00'
                      value={values?.withDrink}
                      onChange={(value) => setFieldValue("withDrink", value)}
                    />
                  </Flex>
                  <Flex flex='1' minWidth='200px'>
                    <Field
                      id='withoutDrink'
                      label='Valor sugerido s/ bebida:'
                      name='withoutDrink'
                      type='number'
                      placeholder='20.00'
                      value={values?.withoutDrink}
                      onChange={(value) => setFieldValue("withoutDrink", value)}
                    />
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem colSpan={2}>
                <Field
                  textArea
                  id='description'
                  label='Descrição:'
                  name='description'
                  placeholder='Descrição'
                  value={values?.description}
                  onChange={(value) => setFieldValue("description", value)}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Field
                  textArea
                  id='observation'
                  label='Observações:'
                  name='observation'
                  placeholder='Observações'
                  value={values?.observation}
                  onChange={(value) => setFieldValue("observation", value)}
                />
              </GridItem>
            </Grid>
            <Flex justifyContent='center' paddingTop='20px'>
              <Button
                width='50%'
                backgroundColor='#ffd836'
                color='black'
                onClick={() => handleSubmit()}
              >
                Cadastrar
              </Button>
            </Flex>
          </>
        )
      }}
    </Formik>
  )
}
