
import ListUni from "../../components/ListUni";
import { getUniversities } from "../../services/UniService";


export default async function Home() {
  const universities = await getUniversities()

  return (
    <div className="w-full flex flex-col items-center text-white">
      <div
        className="header header-pop-up"
      >
        Finland Universities
      </div>
      <div
        className="p-5 header-pop-up"
      >Find information about universities at Finland easily
      </div>
      <ListUni universities={universities} />
    </div>
  );
}
