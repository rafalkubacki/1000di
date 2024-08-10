export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        The project is still in progress. The source code will be available on{' '}
        <a
          href="https://github.com/rafalkubacki/1000di"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
