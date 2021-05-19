import { 
  IonContent, 
  IonPage, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonItem,
  IonInput,
  IonButton,
  IonCheckbox,
  IonIcon,
  IonList,
  IonLabel
} from '@ionic/react';

import { pencil, trash } from 'ionicons/icons';

import React, { useState } from 'react';

import './Home.css';

const Home: React.FC = () => {
  const [task, setTask] = useState('');

  const onAddTodo = (): boolean => {
    if (task) {
      localStorage.setItem((localStorage.length + 1).toString(), JSON.stringify({
        todo: task,
        done: false
      }));
      setTask('');
      return true;
    } else {
      return false;
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">

          <IonRow>
            <IonCol>
              <div className="ion-text-center">
                <h1>My To Do List</h1>
              </div>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="8">
              <IonItem>
                <IonInput 
                  value={task} 
                  onIonChange={(e) => setTask(e.detail.value!)} 
                />
              </IonItem>
            </IonCol>
            <IonCol size="4">
              <IonButton 
                expand="full" 
                fill="solid"
                onClick={() => onAddTodo()}
              >Add To List
              </IonButton>
            </IonCol>
          </IonRow>

          <IonList>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel>
                <h1>Create Idea</h1>
              </IonLabel>
              <IonIcon icon={pencil} slot="end" onClick={() => console.log('edit')} />
              <IonIcon icon={trash} slot="end" onClick={() => console.log('delete')} />
            </IonItem>
        </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
