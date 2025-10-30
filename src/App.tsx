
import Section from "./components/Section";
import Button from "./components/Button";
import AlertBox from "./components/AlertBox";
import UserProfileCard from "./components/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay";
import { log } from "console";




function App() {
  const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: "Avatar",
};

const product = {
  id: "1",
  name: "keyboard",
  price: 10,
  description: "gaming keyboard",
  imageUrl: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
  inStock: true
}

// const addToCart = (productId:string) => {
//   console.log(`Product Id# ${productId} add to cart`);
//   alert(`Added ${product.name} to cart`);
  
// }
  return (
    <main className="bg-white text-black h-screen p-5">
      <h1>Components Library</h1>
      {/* <Section title="Section 1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora
          ut pariatur blanditiis, exercitationem libero! Minima modi, cum
          nostrum officia repudiandae a eligendi ab cupiditate ex autem labore
          sint! Porro!
        </p>
      </Section>

      <Section title="Section 2">
        <h3>Subheader</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
          illo. Labore nesciunt sequi quisquam qui, animi unde. Optio ducimus
          aspernatur eaque modi cumque? Sit quam ipsum totam, velit quaerat
          nihil.
        </p>
      </Section> */}

      {/* <Section title="Buttons">
        <div className="grid grid-cols-4">
          <Button text="Click me!" />
          <Button
            text="Submit"
            type="submit"
            onClick={() => console.log("Submit")}
          />
          
          <Button
            text="Submit"
            type="reset"
            onClick={() => console.log("reset")}
          />
          <Button
            text="Disabled"
            type="reset"
            disabled={false}
            onClick={() => console.log("disabled")}
          />
       
        </div>
      </Section> */}
      <Section title="Lab9.1-AlertBox">
        <AlertBox
          type="success"
          massage="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="error"
          massage="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="warning"
          massage="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
        <AlertBox
          type="info"
          massage="We did it"
          onClose={() => alert("Alert closed")}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>

      <Section title="Lab9-UserProfileCard">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(id) => {console.log(`Editing userid# ${user.id}`);
           alert(`Editing user ${id}`)}}
        ></UserProfileCard>
      </Section>
        
      </Section>

      <ProductDisplay product={product} 
      showDescription={true} 
      showStockStatus={true}  
      onAddToCart={(productId) => {console.log(`Product with ID ${productId} added to cart.`);
      }}>
      </ProductDisplay>
    </main>
  );
}

export default App;