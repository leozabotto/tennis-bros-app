import Image from 'next/image';

import userProfilePlaceholder from '@/assets/images/user-profile-placeholder.png';
import DropdownMenu from '../DropdownMenu';
import {
  UilCalendarAlt,
  UilCheckCircle,
  UilClock,
  UilEdit,
  UilMapMarker,
  UilTimesCircle,
  UilTrashAlt,
} from '@iconscout/react-unicons';

const InviteStatusLabel = () => {
  return (
    <div className="text-white bg-yellow-400 py-1 px-2 w-36 flex items-center justify-center rounded">
      <span className="block">Finalizado</span>
    </div>
  );
};

const InviteTotalizators = () => {
  return (
    <div className="flex gap-3 mt-5 md:justify-center">
      <button className="bg-gray-100 p-2 rounded-full w-20 flex items-center jusitfy-center gap-2 font-medium">
        <UilTimesCircle className="text-red-500" /> 4
      </button>
      <button className="bg-gray-100 p-2 rounded-full w-20 flex items-center jusitfy-center gap-2 font-medium">
        <UilCheckCircle className="text-c-green-200" /> 4
      </button>
    </div>
  );
};

export default function InviteCard() {
  return (
    <div className="border-b-2 pb-5">
      <div className="flex justify-between md:px-10 lg:px-32 xl:px-72">
        <div className="flex gap-3 items-center">
          <Image
            src={userProfilePlaceholder}
            width={50}
            height={50}
            alt="Foto de Perfil do Usuário"
          />
          <div className="flex flex-col items-start">
            <span className="font-bold block text-center mt-2 text-gray-500">
              Leonardo Z.
            </span>
            <span className="font-medium block text-center text-c-gray-200">
              @leozabotto
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span>23m</span>
          <DropdownMenu
            items={[
              {
                label: 'Editar',
                Icon: UilEdit,
                onClick: () => alert('Opening Edit Modal'),
                isHidden: false,
              },
              {
                label: 'Excluir',
                Icon: UilTrashAlt,
                onClick: () => alert('Opening Delete Modal'),
                isHidden: false,
              },
            ]}
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <InviteStatusLabel />
      </div>

      <div className="pt-10 flex flex-col gap-2">
        <div className="flex gap-8 md:justify-center">
          <span className="font-medium flex gap-3 items-center">
            <UilCalendarAlt className="text-c-green-200" /> 14/02/2023{' '}
          </span>{' '}
          <span className="font-medium flex gap-3 items-center">
            <UilClock className="text-blue-400" /> 14:30h
          </span>
        </div>
        <span className="font-medium flex gap-3 items-star md:justify-center">
          <UilMapMarker className="text-orange-400" />
          <span className="text-center">
            Rua Etc. e Tal, 324 - São Paulo, SP - 06541-551
          </span>
        </span>
      </div>

      <InviteTotalizators />
    </div>
  );
}
