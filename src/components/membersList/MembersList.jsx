import { Member } from '../member/Member'
import './MembersList.css'

export const MembersList = ({
  memberList,
}) => (
  <div className="members-list-wrapper">
    <div className="header">Members</div>
    {memberList?.map((member, id) => <Member key={id} {...member} />)}
  </div>
)