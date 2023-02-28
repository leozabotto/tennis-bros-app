import InviteCard from '@/components/InviteCard';

export default function AcceptedInvites() {
  return (
    <div>
      <InviteCard
        status="Aberto"
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={true}
        isRejected={false}
        showActionButtons={true}
      />
      <InviteCard
        status="Finalizado"
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={true}
        isRejected={false}
        showActionButtons={true}
      />
    </div>
  );
}
