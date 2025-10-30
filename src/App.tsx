import Button from './components/Button';
import Section from './components/Section'
import AlertBox from "./components/AlertBox";
import UserProfileCard from "./components/UserProfileCard";

function App(){
  return (
    <main className='bg-stone-900 text-white'>
      <h1 className="font-bold text-2xl">Componenets Library</h1>

    <section title = 'Section 1'>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, similique officia. Accusamus, assumenda voluptate, veniam quasi suscipit fuga expedita asperiores possimus eligendi repellat explicabo eaque ipsam dolores quod sed ipsum?</p>
    </section>

    <section title='Secrion 2'>
      <h3>Subheader</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus inventore itaque saepe et quidem, quaerat iste molestias, doloribus consectetur quos nihil fugiat magni. Fugit temporibus, ipsam doloremque quia quam beatae?</p>
    </section>


    <Section title = "Buttons"> 
    <div className='grid grid-cols-3'>
        <Button text='Click me!' />
        <Button text="Submit" type="submit" onClick={() => console.log("Submit")} />
        <Button text="Reset" type="reset" onClick={() => console.log("Reset")} />
        <Button text="Disbaled" type="reset" disabled={true} onClick={() => console.log("Reset")} />
        </div>

    </Section>

     <Section title="Lab9-AlertBox">
        <AlertBox
          type="success"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="error"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="warning"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="info"
          message="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>

      <Section title="Lab9-UserProfileCard">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(id) => alert(`Editing user ${id}`)}
        ></UserProfileCard>
      </Section>
        
      </Section>

    </main>
  )
}

export default App;