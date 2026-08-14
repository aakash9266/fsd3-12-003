import readline from 'readline/promises'
import { stdin,stdout } from 'process';
const main = async  () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
do{
  console.log("Welcome to FLipkart 😊");
  console.log("1........Show cart");
  console.log("2........Add product");
  console.log("3........Remove product");
  console.log("4........Update Quantity");
  console.log("5........Exit");
  choice = await cin.question("Enter your choice");
  switch(Number(choice)){
    case 1:
        console.log("show products");
        break;
    case 2:
        console.log("product added");
        break;
    case 3:
        console.log("remove product");
        break;
    case 4:
        console.log("update product quantity");
        break;
    case 5:
        console.log("See you later");
        break;
    default:
        console.log("Invalid choice try again ");

  }
  }while(choice!=5);
  cin.close();
};
main();
