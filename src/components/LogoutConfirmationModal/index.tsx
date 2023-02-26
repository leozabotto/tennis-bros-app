import { useState } from 'react';

import useAuth from '@/hooks/useAuth';
import ConfirmationModal from '../ConfirmationModal';

export default function LogoutConfirmationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handleSignOut } = useAuth();

  return (
    <>
      {isOpen && (
        <ConfirmationModal
          show={isOpen}
          handleClose={() => setIsOpen(false)}
          onConfirmation={handleSignOut}
          title={'Logout'}
          message={'Deseja realmente sair do Tennis Bros?'}
        />
      )}
    </>
  );
}
