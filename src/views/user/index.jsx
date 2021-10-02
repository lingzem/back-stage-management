import React from 'react';
import TypingCard from '@/components/TypingCard'
const AdminPage = () => {
  const cardContent = `用户页面`
  return ( 
    <div className="app-container">
      <TypingCard title='用户管理' source={cardContent}/>
    </div>
  );
}
 
export default AdminPage;