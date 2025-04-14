
import ListUni from "../../components/ListUni";
import { getUniversities } from "../../services/UniService";


export default async function Home() {
  const universities = await getUniversities()
  console.log(universities)
  return (
    <div className="w-full flex flex-col items-center text-white">
      <div
        className="header header-pop-up"
      >
        Danh sách đại học Phần Lan
      </div>
      <div
        className="p-5 header-pop-up"
      >Tìm thông tin về các trường đại học ở Phần Lan một cách dễ dàng
      </div>
      <ListUni universities={universities} />
    </div>
  );
}
