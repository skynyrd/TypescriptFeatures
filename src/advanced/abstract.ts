abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log(this.commandLine());
    }
}

class GitResetCommand extends Command {
    commandLine(): string {
        return 'git reset';
    }
}

new GitResetCommand().execute();
// new Command().execute(); // error: Cannot create an instance of an abstract class.
