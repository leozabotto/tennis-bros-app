interface DeveloperCreditsFooterProps {
  classes?: string;
}

export default function DeveloperCreditsFooter({
  classes,
}: DeveloperCreditsFooterProps) {
  return (
    <div className={classes}>
      <p className="font-medium">
        Desenvolvido por{' '}
        <a className="underline" href="https://github.com/leozabotto">
          Leonardo Zabotto
        </a>
      </p>
    </div>
  );
}
