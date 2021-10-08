import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { Formik } from "formik"
import * as Yup from "yup"
import { Field } from "../../../components"
import { useApp } from "../../../context/AppContext"
import { getRandomInt } from "../../../utils"

export const NewParticipant = ({
  id,
  setModal,
}: {
  id: number | null
  setModal: (type: string) => void
}) => {
  const { addPartipant, listChurras } = useApp()

  const churras = listChurras.find((churras) => churras.id === id)

  const schema = Yup.object().shape({
    name: Yup.string().required("Obrigatório"),
    value: Yup.string().required("Obrigatório"),
  })
  return (
    <Formik
      initialValues={{
        name: "",
        value: "",
      }}
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={(values) => {
        id &&
          addPartipant(id, {
            ...values,
            value: Number(values.value),
            id: getRandomInt(0, 10000),
          })
        setModal("participants")
      }}
    >
      {({ values, setFieldValue, handleSubmit, errors }) => {
        return (
          <Grid gap={3}>
            <GridItem>
              <Field
                id='name'
                label='Name'
                name='name'
                placeholder='ex: Felipe Andrade'
                isRequired
                value={values?.name}
                onChange={(value) => setFieldValue("name", value)}
                helperText={errors?.name}
                isInvalid={!!errors?.name && true}
              />
            </GridItem>
            <Flex wrap='wrap' width='100%'>
              <Flex flex='1' minWidth='350px'>
                <Field
                  id='value'
                  label='Valor'
                  name='value'
                  type='number'
                  isRequired
                  placeholder='60.00'
                  value={`${values?.value}`}
                  onChange={(value) => setFieldValue("value", value)}
                  helperText={errors?.value}
                  isInvalid={!!errors?.value && true}
                />
              </Flex>

              <Flex flex='1' justifyContent='center'>
                <Flex
                  minWidth='300px'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Text fontSize='16px' fontWeight='600'>
                    Valores sugeridos:
                  </Text>
                  <Flex>
                    <Text>
                      c/ Bedida:{" "}
                      <strong>
                        {churras?.withDrink
                          ? `R$ ${churras?.withDrink}`
                          : "R$ 25.00"}
                      </strong>
                      - s/ Bedida:
                      <strong>
                        {churras?.withoutDrink
                          ? `R$ ${churras?.withoutDrink}`
                          : "R$ 20.00"}
                      </strong>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex justifyContent='center'>
              <Button
                width='50%'
                backgroundColor='#ffd836'
                color='black'
                onClick={() => handleSubmit()}
              >
                Cadastrar
              </Button>
            </Flex>
          </Grid>
        )
      }}
    </Formik>
  )
}
