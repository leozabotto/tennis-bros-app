import Image from 'next/image';

import {
  UilCalendarAlt,
  UilCheckCircle,
  UilClock,
  UilEdit,
  UilMapMarker,
  UilTimesCircle,
  UilTrashAlt,
} from '@iconscout/react-unicons';

import DropdownMenu from '../DropdownMenu';
import userProfilePlaceholder from '@/assets/images/user-profile-placeholder.png';
import { stat } from 'fs';

export type InviteStatus = 'Aberto' | 'Finalizado';

export interface IInviteActions {
  isRejected: boolean;
  userAlreadyInteracted: boolean;
}
export interface IInviteCard extends IInviteActions {
  status: InviteStatus;
  showMenuButton: boolean;
  showActionButtons: boolean;
  userOwner: boolean;
}

const InviteStatus = ({ status }: { status: InviteStatus }) => {
  const bgColor = status === 'Aberto' ? 'bg-yellow-400' : 'bg-gray-500';

  return (
    <div className="flex flex-col justify-start items-center mt-5">
      <span className="font-medium">Status</span>
      <span
        className={`text-white  py-1 px-2 w-36 flex items-center justify-center rounded ${bgColor}`}
      >
        {status}
      </span>
    </div>
  );
};

const InviteTotalizators = () => {
  return (
    <div className="flex gap-3 mt-5 md:justify-center">
      <button
        className="bg-gray-100 p-2 rounded-full w-20 flex items-center jusitfy-center gap-2 font-medium hover:bg-gray-200"
        title="Rejeitaram"
      >
        <UilTimesCircle className="text-red-500" /> 4
      </button>
      <button
        className="bg-gray-100 p-2 rounded-full w-20 flex items-center jusitfy-center gap-2 font-medium  hover:bg-gray-200"
        title="Aceitaram"
      >
        <UilCheckCircle className="text-c-green-200" /> 4
      </button>
    </div>
  );
};

const InviteActions = ({
  userAlreadyInteracted,
  isRejected,
}: IInviteActions) => {
  console.log(isRejected);
  console.log(userAlreadyInteracted);
  console.log(userAlreadyInteracted);
  return (
    <div className="flex gap-3 mt-5 justify-center mt-9">
      {((isRejected && userAlreadyInteracted) || !userAlreadyInteracted) && (
        <button
          className="bg-c-green-200 p-2 rounded-full w-32 h-12 flex items-center justify-center gap-2 font-medium  hover:bg-c-green-300 text-white"
          title="Aceitar Convite"
        >
          <UilCheckCircle /> Aceitar
        </button>
      )}

      {((!isRejected && userAlreadyInteracted) || !userAlreadyInteracted) && (
        <button
          className="bg-red-500 p-2 rounded-full w-32 h-12 flex items-center justify-center gap-2 font-medium hover:bg-red-400 text-white"
          title="Recusar Convite"
        >
          <UilTimesCircle /> Recusar
        </button>
      )}
    </div>
  );
};

const InviteFinishButton = () => {
  return (
    <div className="flex gap-3 mt-5 justify-center mt-9">
      <button
        className="bg-c-green-200 p-2 rounded-full w-32 h-12 flex items-center justify-center gap-2 font-medium  hover:bg-c-green-300 text-white"
        title="Finalizar Convite"
      >
        <UilCheckCircle /> Finalizar
      </button>
    </div>
  );
};

export default function InviteCard({
  status,
  showMenuButton,
  showActionButtons,
  userOwner,
  userAlreadyInteracted,
  isRejected,
}: IInviteCard) {
  const isFinished = status === 'Finalizado';

  return (
    <div className="border-b-2 py-5">
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
          {showMenuButton && (
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
          )}
        </div>
      </div>

      <InviteStatus status={status} />

      <div className="pt-8 flex flex-col gap-2">
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
          <span className="text-start">
            Rua Etc. e Tal, 324 - São Paulo, SP - 06541-551
          </span>
        </span>
      </div>

      <InviteTotalizators />
      {showActionButtons && !isFinished && (
        <InviteActions
          userAlreadyInteracted={userAlreadyInteracted}
          isRejected={isRejected}
        />
      )}

      {userOwner && !isFinished && <InviteFinishButton />}
    </div>
  );
}
