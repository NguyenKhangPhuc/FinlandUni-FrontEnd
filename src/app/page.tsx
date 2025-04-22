
import ListUni from "../../components/ListUni";
import { getUniversities } from "../../services/UniService";


export default async function Home() {
  ///Fetch all the universities
  ///Show the header for the universities list page
  ///Show the list of universities by a component 'ListUni'
  const universities = await getUniversities()

  return (
    <div className="w-full bg-gray-900/30 flex flex-col items-center text-white mt-10 p-10">
      <div
        className="header header-pop-up"
      >
        Universities in Finland
      </div>
      <div
        className="2xl:text-xl lg:w-2/3 lg:text-lg p-5 header-pop-up text-sm w-full text-center opacity-70"
      >Finland has 13 universities and 22 universities of applied sciences.
        English-taught degree programmes are offered on bachelor&apos;s, master&apos;s and doctoral levels.
      </div>
      <ListUni universities={universities} />
    </div>
  );
}
