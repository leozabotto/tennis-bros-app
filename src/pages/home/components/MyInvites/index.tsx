import InviteCard from '@/components/InviteCard';

export default function MyInvites() {
  return (
    <div>
      <InviteCard
        status="Aberto"
        isRejected={false}
        showMenuButton={true}
        userOwner={true}
        userAlreadyInteracted={false}
        showActionButtons={false}
      />
      <InviteCard
        status="Finalizado"
        isRejected={false}
        userOwner={true}
        showMenuButton={true}
        userAlreadyInteracted={false}
        showActionButtons={false}
      />
    </div>
  );
}
