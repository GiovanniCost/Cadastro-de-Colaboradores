import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackgrod from "../../components/TopBackgroud";
import {
  Container,
  Form,
  Title,
  ContainerInput,
  InputLabel,
  Span,
  Input,
  UserData,
  JobData,
} from "./style";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputInitiation = useRef();
  const inputJobPosition = useRef();
  const inputEmail = useRef();
  const navigate = useNavigate();

  async function registerNewcollaborator() {
    try {
      const data = await api.post("/workers", {
        name: inputName.current.value,
        age: parseInt(inputAge.current.value),
        job: inputJobPosition.current.value,
        email: inputEmail.current.value,
        startDate: inputInitiation.current.value,
      });

      alert("✅ Colaborador registrado com sucesso!");
      console.log("Resposta do servidor:", data.data);

      inputName.current.value = "";
      inputAge.current.value = "";
      inputJobPosition.current.value = "";
      inputEmail.current.value = "";
      inputInitiation.current.value = "";
    } catch (error) {
      alert("❌ Erro ao registrar: " + error.message);
      console.error("Erro:", error);
    }
  }

  return (
    <>
      <Container>
        <TopBackgrod />

        <Form>
          <Title>Cadastrar Colaboradores</Title>

          <ContainerInput>
            <div>
              <UserData>
                <div>
                  <InputLabel>
                    Nome<Span>*</Span>
                  </InputLabel>
                  <Input
                    type="text"
                    placeholder="Nome do colaborador"
                    ref={inputName}
                  />
                </div>

                <div>
                  <InputLabel>
                    Idade<Span>*</Span>
                  </InputLabel>
                  <Input
                    type="number"
                    placeholder="Idade do colaborador"
                    ref={inputAge}
                  />
                </div>
              </UserData>

              <JobData>
                <div>
                  <InputLabel>
                    Inicio<Span>*</Span>
                  </InputLabel>
                  <Input
                    type="date"
                    placeholder="Data da Contratação"
                    ref={inputInitiation}
                  />
                </div>

                <div>
                  <InputLabel>
                    Cargo<Span>*</Span>
                  </InputLabel>
                  <Input
                    type="text"
                    placeholder="Função do colaborador"
                    ref={inputJobPosition}
                  />
                </div>
              </JobData>
            </div>
          </ContainerInput>

          <div>
            <InputLabel>
              Email<Span>*</Span>
            </InputLabel>
            <Input
              type="text"
              placeholder="email corporativo"
              ref={inputEmail}
            />
          </div>
          <div>
            <Button type="button" theme={"primary"} onClick={registerNewcollaborator}>
              Cadastrar Colaborador
            </Button>
          </div>
        </Form>
        <Button type="button" onClick={()=> navigate('/lista-de-colaboradores')}>Mostrar Colaboradores</Button>
      </Container>
    </>
  );
}

export default Home;
