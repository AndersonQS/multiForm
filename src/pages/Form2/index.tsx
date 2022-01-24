import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import Theme from '../../components/Theme';
import * as C from './styles';
import SelectOption from '../../components/SelectOption';

export const Form2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, []);

  const handleNextForm = () => {
    if (state.name !== '') {
      navigate('/form3');
    } else alert("Preencha os dados.");
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 </p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo cabaixo com seu nome completo.</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
        />
        <SelectOption
          title="Sou Programador"
          description="Comecei a programar há 2 anos ou mais"
        />

        <button onClick={handleNextForm}>Próximo</button>
      </C.Container>
    </Theme>
  );
}
