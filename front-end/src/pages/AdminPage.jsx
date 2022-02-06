import { useState } from 'react';
import ClothingManagement from '../components/ClothingManagement';
import PropsManagement from '../components/PropsManagement';
import SerigraphyManagement from '../components/SerigraphyManagement';
import CustomdesignManagement from '../components/CustomdesignManagement';
import GaleryManagement from '../components/GaleryManagement';
import Sidebar from '../components/Sidebar';
const AdminPage = () => {
	const [ setting, setSettings ] = useState('');

	return (
		<div className="w-10/12 mx-auto flex">
			<Sidebar setSettings={(setting) => setSettings(setting)} />
			<div>
				{setting && setting === 'Clothing' && <ClothingManagement />}
				{setting && setting === 'Props' && <PropsManagement />}
				{setting && setting === 'Serigraphy' && <SerigraphyManagement />}
				{setting && setting === 'Custom Design' && <CustomdesignManagement />}
				{setting && setting === 'Galeries' && <GaleryManagement />}
			</div>
		</div>
	);
};

export default AdminPage;
