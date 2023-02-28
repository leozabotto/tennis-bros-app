import InviteCard from '@/components/InviteCard';

export default function NewInvites() {
  return (
    <div>
      <InviteCard
        status="Aberto"
        isRejected={false}
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={false}
        showActionButtons={true}
      />
      <InviteCard
        status="Aberto"
        isRejected={false}
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={false}
        showActionButtons={true}
      />
      <InviteCard
        status="Aberto"
        isRejected={false}
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={false}
        showActionButtons={true}
      />
      <InviteCard
        status="Aberto"
        isRejected={false}
        showMenuButton={false}
        userOwner={false}
        userAlreadyInteracted={false}
        showActionButtons={true}
      />
    </div>
  );
}
