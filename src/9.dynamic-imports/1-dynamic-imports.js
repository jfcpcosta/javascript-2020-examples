const fn = async () => {
    const {hi, bye} = await import('./say.js');
    
    hi();
    bye();
};

fn();