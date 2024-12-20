import EditPersonalInfo from "../organizations/EditPersonalInfo";
import EditBankAccInfo from "../organizations/EditBankAccInfo";
import EditUserAccInfo from "../organizations/EditUserAccInfo";

function EditProfilePage() {
  return (
    <div className="w-full flex flex-col gap-[19px] mb-[154px]">
      <EditUserAccInfo />
      <EditPersonalInfo />
      <EditBankAccInfo />
    </div>
  );
}

export default EditProfilePage;
