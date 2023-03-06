import mongoose from 'mongoose';
import "dotenv/config"

async function main() {
  await mongoose.connect(`${process.env.MONGODB_URI}develop`);
  console.log('Conectou ao Mongoose!')
}

main().catch((err) => {
  console.log(`Não foi possível conectar ao MongoDB: ${err}`)
});

export default mongoose;   