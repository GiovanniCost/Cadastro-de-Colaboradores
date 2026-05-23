import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import TopBackgrod from "../../components/TopBackgroud";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/style";
import { Container, Title, ContainerWorker, CardWorker,AvatarWorkers, TrashIcon } from "./style";
import Trash  from "../../assets/trash.svg";



const ListWorkers = () => {
  const [workers, setWorker] = useState([]);
   const navigate = useNavigate();
  
  useEffect(() => {
    async function getWorkers() {
      const { data } = await api.get("/workers");
      setWorker(data);
    }
    getWorkers();
  }, []);
 
async function deleteWorker(id) {
  try {
    console.log("Deletando worker com ID:", id)
    await api.delete(`/workers/${id}`)  
    const updateWorkers = workers.filter(worker => worker._id !== id)
    setWorker(updateWorkers)
    alert("Funcionário deletado com sucesso!")
  } catch (error) {
    console.error("Erro ao deletar funcionário:", error)
    alert("Erro ao deletar funcionário!")
  }
}


  return (
    <Container>
      <TopBackgrod />
      <Title>Quadro de Colaboradores Cadastrados</Title>
      <ContainerWorker>
        
          {workers.map((worker) => (
            <CardWorker key={worker._id}>
              <AvatarWorkers src="https://testingbot.com/free-online-tools/random-avatar/80"/>
              <h3>{worker.name}</h3>
              <p>{worker.age}</p>
              <p>{worker.job}</p>
              <p>{worker.Initiation}</p>
              <p>{worker.email}</p>
              <TrashIcon src={Trash} alt={'icone'} onClick={()=> deleteWorker(worker._id)} />
            </CardWorker>
          ))}
         
        
      </ContainerWorker>
      <Button type="button" theme={'primary'} onClick={()=> navigate('/')}>Voltar</Button>
    </Container>
  );
};

export default ListWorkers;
