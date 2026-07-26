type RevealTarget =
    | string
    | HTMLElement
    | NodeListOf<Element>;

type RevealOptions =
    scrollReveal.ScrollRevealObjectOptions;

let instancePromise:
    | Promise<scrollReveal.ScrollRevealObject>
    | null = null;

const getInstance =
    async (): Promise<scrollReveal.ScrollRevealObject> => {
        if (!instancePromise) {
            instancePromise = import('scrollreveal').then(
                ({ default: ScrollReveal }) => ScrollReveal(),
            );
        }

        return instancePromise;
    };

const sr = {
    async reveal(
        target: RevealTarget,
        options?: RevealOptions,
    ): Promise<void> {
        if (typeof window === 'undefined') {
            return;
        }

        const instance = await getInstance();

        if (options) {
            instance.reveal(target, options);
        } else {
            instance.reveal(target);
        }
    },
};

export default sr;