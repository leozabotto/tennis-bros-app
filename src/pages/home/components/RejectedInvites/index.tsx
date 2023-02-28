import InviteCard from '@/components/InviteCard';

export default function RejectedInvites() {
  return (
    <div>
      <InviteCard
        status="Aberto"
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={true}
        isRejected={true}
        showActionButtons={true}
      />
      <InviteCard
        status="Finalizado"
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={true}
        isRejected={true}
        showActionButtons={true}
      />
      <InviteCard
        status="Finalizado"
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={true}
        isRejected={true}
        showActionButtons={true}
      />
    </div>
  );
}
