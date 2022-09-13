import { Mongoose } from "mongoose";
const { Scheme, model } = Mongoose;
const Cow = new Scheme({
  name: {
    type: String,
    required: true,
  },
  temp: {
    type: JSON,
    required: true,
  },
  location: {
    type: JSON,
    required: true,
  },
});
export default model("Cow", Cow);
