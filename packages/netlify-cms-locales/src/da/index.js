const da = {
  auth: {
    login: 'Log ind',
    loggingIn: 'Logger ind...',
    loginWithNetlifyIdentity: 'Log ind med Netlify Identity',
    loginWithBitbucket: 'Log ind med Bitbucket',
    loginWithGitHub: 'Log ind med GitHub',
    loginWithGitLab: 'Log ind med GitLab',
    errors: {
      email: 'Husk at indtaste din e-mail.',
      password: 'Indtast venligst dit kodeord.',
      identitySettings:
        'Kunne ikke hente indstillingerne til Identity. Kontroller at Identity og Git Gateway er aktiveret når du benytter git-gateway backend.',
    },
  },
  app: {
    header: {
      content: 'Indhold',
      workflow: 'Arbejdsgang',
      media: 'Media',
      quickAdd: 'Quick add',
    },
    app: {
      errorHeader: 'Fejl ved indlæsning af CMS konfigurationen',
      configErrors: 'Konfigurationsfejl',
      checkConfigYml: 'Kontroller din config.yml fil.',
      loadingConfig: 'Indlæser konfiguration...',
      waitingBackend: 'afventer backend...',
    },
    notFoundPage: {
      header: 'Siden blev ikke fundet',
    },
  },
  collection: {
    sidebar: {
      collections: 'Indhold',
      allCollections: 'Alt indhold',
      searchAll: 'Søg',
      searchIn: 'Søg i',
    },
    collectionTop: {
      sortBy: 'Sorter efter',
      viewAs: 'Vis som',
      newButton: 'Ny %{collectionLabel}',
      ascending: 'Stigende',
      descending: 'Faldende',
      searchResults: 'Søgeresultater ved søgningen "%{searchTerm}"',
      searchResultsInCollection: 'Søgeresultater ved søgningen "%{searchTerm}" i %{collection}',
      filterBy: 'Filtrer efter',
    },
    entries: {
      loadingEntries: 'Indlæser indhold...',
      cachingEntries: 'Caching indhold...',
      longerLoading: 'Dette kan godt tage et par minutter',
      noEntries: 'Ingen indhold',
    },
    defaultFields: {
      author: {
        label: 'Forfatter',
      },
      updatedOn: {
        label: 'Opdateret',
      },
    },
  },
  editor: {
    editorControl: {
      field: {
        optional: 'frivillig',
      },
    },
    editorControlPane: {
      widget: {
        required: '%{fieldLabel} er obligatorisk.',
        regexPattern: "%{fieldLabel} didn't match the pattern: %{pattern}.",
        processing: '%{fieldLabel} is processing.',
        range: '%{fieldLabel} skal være mellem %{minValue} og %{maxValue}.',
        min: '%{fieldLabel} skal mindst være %{minValue}.',
        max: '%{fieldLabel} skal være %{maxValue} eller lavere.',
        rangeCount: '%{fieldLabel} skal indeholde mellem %{minCount} og %{maxCount} element(er).',
        rangeCountExact: '%{fieldLabel} skal indeholde %{count} element(er).',
        minCount: '%{fieldLabel} skal mindst indeholde %{minCount} element(er).',
        maxCount: '%{fieldLabel} må indeholde %{maxCount} eller færre element(er).',
        invalidPath: `'%{path}' er ikke en gyldig sti`,
        pathExists: `Stien '%{path}' eksisterer allerede`,
      },
      i18n: {
        writingInLocale: 'Skriver på %{locale}',
      },
    },
    editor: {
      onLeavePage: 'Er du sikker på du vil forlade siden?',
      onUpdatingWithUnsavedChanges: 'Du har ændringer der ikke er gemte, gem venligst før du opdaterer status.',
      onPublishingNotReady: 'Opdater venligst status til "Godkendt" før udgivelse.',
      onPublishingWithUnsavedChanges: 'Du har ændringer der ikke er gemte, gem venligst før udgivelse.',
      onPublishing: 'Er du sikker på du vil udgive dette indhold?',
      onUnpublishing: 'Er du sikker på du vil unpublish dette indhold?',
      onDeleteWithUnsavedChanges:
        'Er du sikker på at du vil slette dette udgivet indhold, sammen med dine ændringer der endnu ikke er gemte?',
      onDeletePublishedEntry: 'Er du sikker på du vil slette dette udgivet indhold?',
      onDeleteUnpublishedChangesWithUnsavedChanges:
        'This will delete all unpublished changes to this entry, as well as your unsaved changes from the current session. Do you still want to delete?',
      onDeleteUnpublishedChanges:
        'All unpublished changes to this entry will be deleted. Do you still want to delete?',
      loadingEntry: 'Indlæser indhold...',
      confirmLoadBackup: 'En lokal kopi af dette indhold blev genskabt, vil du benytte den?',
    },
    editorToolbar: {
      publishing: 'Udgiver...',
      publish: 'Udgiv',
      published: 'Udgivet',
      unpublish: 'Unpublish',
      duplicate: 'Dupliker',
      unpublishing: 'Unpublishing...',
      publishAndCreateNew: 'Udgiv og opret ny',
      publishAndDuplicate: 'Udgiv og dupliker',
      deleteUnpublishedChanges: 'Slet unpublished ændringer',
      deleteUnpublishedEntry: 'Slet unpublished indhold',
      deletePublishedEntry: 'Slet udgivet indhold',
      deleteEntry: 'Slet indhold',
      saving: 'Gemmer...',
      save: 'Gem',
      deleting: 'Sletter...',
      updating: 'Opdaterer...',
      setStatus: 'Ændr status',
      backCollection: 'Skriver i %{collectionLabel} indhold',
      unsavedChanges: 'Ugemte ændringer',
      changesSaved: 'Ændringer er gemt',
      draft: 'Kladde',
      inReview: 'Til godkendelse',
      ready: 'Godkendt',
      publishNow: 'Udgiv nu',
      deployPreviewPendingButtonLabel: 'Check for Preview',
      deployPreviewButtonLabel: 'Vis eksempel',
      deployButtonLabel: 'Vis side',
    },
    editorWidgets: {
      markdown: {
        bold: 'Fed',
        italic: 'Kursiv',
        code: 'Kode',
        link: 'Link',
        linkPrompt: 'Indtast linkets URL',
        headings: 'Overskrifter',
        quote: 'Citat',
        bulletedList: 'Punktliste',
        numberedList: 'Nummereret liste',
        addComponent: 'Add Component',
        richText: 'Rich Text',
        markdown: 'Markdown',
      },
      image: {
        choose: 'Vælg et billede',
        chooseDifferent: 'Vælg et andet billede',
        remove: 'Fjern billede',
      },
      file: {
        choose: 'Vælg en fil',
        chooseDifferent: 'Vælg en anden fil',
        remove: 'Fjern fil',
      },
      unknownControl: {
        noControl: "No control for widget '%{widget}'.",
      },
      unknownPreview: {
        noPreview: "No preview for widget '%{widget}'.",
      },
      headingOptions: {
        headingOne: 'Overskrift 1',
        headingTwo: 'Overskrift 2',
        headingThree: 'Overskrift 3',
        headingFour: 'Overskrift 4',
        headingFive: 'Overskrift 5',
        headingSix: 'Overskrift 6',
      },
      datetime: {
        now: 'Nu',
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: 'Kladde',
    },
    mediaLibrary: {
      onDelete: 'Are you sure you want to delete selected media?',
      fileTooLarge: 'Filen er for stor.\nConfigured to not allow files greater than %{size} kB.',
    },
    mediaLibraryModal: {
      loading: 'Indlæser...',
      noResults: 'No results.',
      noAssetsFound: 'No assets found.',
      noImagesFound: 'No images found.',
      private: 'Private ',
      images: 'Bileder',
      mediaAssets: 'Media assets',
      search: 'Søg...',
      uploading: 'Uploader...',
      upload: 'Upload',
      download: 'Download',
      deleting: 'Sletter...',
      deleteSelected: 'Slet markerede',
      chooseSelected: 'Vælg markerede',
    },
  },
  ui: {
    default: {
      goBackToSite: 'Go back to site',
    },
    errorBoundary: {
      title: 'Fejl',
      details: "There's been an error - please ",
      reportIt: 'open an issue on GitHub.',
      detailsHeading: 'Detaljer',
      privacyWarning:
        'Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.',
      recoveredEntry: {
        heading: 'Genskabt dokument',
        warning: 'Kopier og indsæt indholdet et sted før du navigerer videre!',
        copyButtonLabel: 'Kopier til udklipsholder',
      },
    },
    settingsDropdown: {
      logOut: 'Log ud',
    },
    toast: {
      onFailToLoadEntries: 'Kunne ikke indlæse: %{details}',
      onFailToLoadDeployPreview: 'Kunne ikke indlæse eksempel: %{details}',
      onFailToPersist: 'Failed to persist entry: %{details}',
      onFailToDelete: 'Kunne ikke slette: %{details}',
      onFailToUpdateStatus: 'Kunne ikke opdatere status: %{details}',
      missingRequiredField: "Ups, du overså et obligatorisk felt. Udfyld venligst før du gemmer.",
      entrySaved: 'Indhold gemt',
      entryPublished: 'Indhold udgivet',
      entryUnpublished: 'Entry unpublished',
      onFailToPublishEntry: 'Kunne ikke udgive: %{details}',
      onFailToUnpublishEntry: 'Failed to unpublish entry: %{details}',
      entryUpdated: 'Status opdateret',
      onDeleteUnpublishedChanges: 'Unpublished changes deleted',
      onFailToAuth: '%{details}',
      onLoggedOut: 'Du blev logget ud, kopier venligst dit indhold og log ind igen',
      onBackendDown:
        'The backend service is experiencing an outage. Undersøg %{details} for mere information',
    },
  },
  workflow: {
    workflow: {
      loading: 'Indlæser Editorial Workflow indhold',
      workflowHeading: 'Editorial Workflow',
      newPost: 'New Post',
      description:
        '%{smart_count} indhold afventer godkendelse, %{readyCount} er godkendt til udgivelse. |||| %{smart_count} indhold afventer godkendelse, %{readyCount} er godkendt til udgivelse.',
      dateFormat: 'MMMM D',
    },
    workflowCard: {
      lastChange: '%{date} af %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'af %{author}',
      deleteChanges: 'Slet ændringer',
      deleteNewEntry: 'Slet nyt indhold',
      publishChanges: 'Udgiv ændringer',
      publishNewEntry: 'Udgiv nyt indhold',
    },
    workflowList: {
      onDeleteEntry: 'Er du sikker på du vil slette dette indhold?',
      onPublishingNotReadyEntry:
        'Kun indhold med status sat til "Godkendt" kan udgives. Træk venligst the card til kolonnen "Godkendt" for at kunne udgive.',
      onPublishEntry: 'Er du sikker på du vil udgive dette indhold?',
      draftHeader: 'Kladder',
      inReviewHeader: 'Til godkendelse',
      readyHeader: 'Godkendt',
      currentEntries: '%{smart_count} indhold |||| %{smart_count} indhold',
    },
  },
};

export default da;
