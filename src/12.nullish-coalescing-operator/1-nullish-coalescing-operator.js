const response = {
    settings: {
      nullValue: null,
      height: 400,
      animationDuration: 0,
      headerText: '',
      showSplashScreen: false
    }
  };
  
  const undefinedValue = response.settings.undefinedValue || 'some other default'; 
  const nullValue = response.settings.nullValue || 'some other default';
  const animationDuration = response.settings.animationDuration || 300;

  console.log(undefinedValue, nullValue, animationDuration);