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
        'Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.',
    },
  },
  app: {
    header: {
      content: 'Indhold',
      workflow: 'Workflow',
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
      collections: 'Collections',
      allCollections: 'All Collections',
      searchAll: 'Søg',
      searchIn: 'Søg i',
    },
    collectionTop: {
      sortBy: 'Sorter efter',
      viewAs: 'View as',
      newButton: 'Ny %{collectionLabel}',
      ascending: 'Stigende',
      descending: 'Faldende',
      searchResults: 'Søgeresultater for "%{searchTerm}"',
      searchResultsInCollection: 'Søgeresultater for "%{searchTerm}" i %{collection}',
      filterBy: 'Filtrer efter',
    },
    entries: {
      loadingEntries: 'Loading Entries...',
      cachingEntries: 'Caching Entries...',
      longerLoading: 'This might take several minutes',
      noEntries: 'No Entries',
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
        writingInLocale: 'Writing in %{locale}',
      },
    },
    editor: {
      onLeavePage: 'Er du sikker på du vil forlade siden?',
      onUpdatingWithUnsavedChanges: 'Du har ændringer der ikke er gemte, please save before updating status.',
      onPublishingNotReady: 'Please update status to "Ready" before publishing.',
      onPublishingWithUnsavedChanges: 'Du har ændringer der ikke er gemte, please save before publishing.',
      onPublishing: 'Are you sure you want to publish this entry?',
      onUnpublishing: 'Are you sure you want to unpublish this entry?',
      onDeleteWithUnsavedChanges:
        'Are you sure you want to delete this published entry, as well as your unsaved changes from the current session?',
      onDeletePublishedEntry: 'Are you sure you want to delete this published entry?',
      onDeleteUnpublishedChangesWithUnsavedChanges:
        'This will delete all unpublished changes to this entry, as well as your unsaved changes from the current session. Do you still want to delete?',
      onDeleteUnpublishedChanges:
        'All unpublished changes to this entry will be deleted. Do you still want to delete?',
      loadingEntry: 'Loading entry...',
      confirmLoadBackup: 'A local backup was recovered for this entry, would you like to use it?',
    },
    editorToolbar: {
      publishing: 'Publishing...',
      publish: 'Publish',
      published: 'Published',
      unpublish: 'Unpublish',
      duplicate: 'Duplicate',
      unpublishing: 'Unpublishing...',
      publishAndCreateNew: 'Publish and create new',
      publishAndDuplicate: 'Publish and duplicate',
      deleteUnpublishedChanges: 'Delete unpublished changes',
      deleteUnpublishedEntry: 'Delete unpublished entry',
      deletePublishedEntry: 'Delete published entry',
      deleteEntry: 'Delete entry',
      saving: 'Gemmer...',
      save: 'Gem',
      deleting: 'Sletter...',
      updating: 'Opdaterer...',
      setStatus: 'Set status',
      backCollection: ' Writing in %{collectionLabel} collection',
      unsavedChanges: 'Unsaved Changes',
      changesSaved: 'Changes saved',
      draft: 'Kladde',
      inReview: 'In review',
      ready: 'Ready',
      publishNow: 'Publish now',
      deployPreviewPendingButtonLabel: 'Check for Preview',
      deployPreviewButtonLabel: 'View Preview',
      deployButtonLabel: 'View Live',
    },
    editorWidgets: {
      markdown: {
        bold: 'Fed',
        italic: 'Kursiv',
        code: 'Kode',
        link: 'Link',
        linkPrompt: 'Enter the URL of the link',
        headings: 'Overskrifter',
        quote: 'Citat',
        bulletedList: 'Punktliste',
        numberedList: 'Nummerliste',
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
      fileTooLarge: 'File too large.\nConfigured to not allow files greater than %{size} kB.',
    },
    mediaLibraryModal: {
      loading: 'Indlæser...',
      noResults: 'No results.',
      noAssetsFound: 'No assets found.',
      noImagesFound: 'No images found.',
      private: 'Private ',
      images: 'Bileder',
      mediaAssets: 'Media assets',
      search: 'Search...',
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
        heading: 'Recovered document',
        warning: 'Please copy/paste this somewhere before navigating away!',
        copyButtonLabel: 'Copy to clipboard',
      },
    },
    settingsDropdown: {
      logOut: 'Log ud',
    },
    toast: {
      onFailToLoadEntries: 'Failed to load entry: %{details}',
      onFailToLoadDeployPreview: 'Failed to load preview: %{details}',
      onFailToPersist: 'Failed to persist entry: %{details}',
      onFailToDelete: 'Failed to delete entry: %{details}',
      onFailToUpdateStatus: 'Failed to update status: %{details}',
      missingRequiredField: "Oops, you've missed a required field. Please complete before saving.",
      entrySaved: 'Entry saved',
      entryPublished: 'Entry published',
      entryUnpublished: 'Entry unpublished',
      onFailToPublishEntry: 'Failed to publish: %{details}',
      onFailToUnpublishEntry: 'Failed to unpublish entry: %{details}',
      entryUpdated: 'Entry status updated',
      onDeleteUnpublishedChanges: 'Unpublished changes deleted',
      onFailToAuth: '%{details}',
      onLoggedOut: 'You have been logged out, please back up any data and login again',
      onBackendDown:
        'The backend service is experiencing an outage. See %{details} for more information',
    },
  },
  workflow: {
    workflow: {
      loading: 'Loading Editorial Workflow Entries',
      workflowHeading: 'Editorial Workflow',
      newPost: 'New Post',
      description:
        '%{smart_count} entry waiting for review, %{readyCount} ready to go live. |||| %{smart_count} entries waiting for review, %{readyCount} ready to go live. ',
      dateFormat: 'MMMM D',
    },
    workflowCard: {
      lastChange: '%{date} af %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'af %{author}',
      deleteChanges: 'Slet ændringer',
      deleteNewEntry: 'Delete new entry',
      publishChanges: 'Publish changes',
      publishNewEntry: 'Publish new entry',
    },
    workflowList: {
      onDeleteEntry: 'Are you sure you want to delete this entry?',
      onPublishingNotReadyEntry:
        'Only items with a "Ready" status can be published. Please drag the card to the "Ready" column to enable publishing.',
      onPublishEntry: 'Are you sure you want to publish this entry?',
      draftHeader: 'Kladder',
      inReviewHeader: 'In Review',
      readyHeader: 'Ready',
      currentEntries: '%{smart_count} entry |||| %{smart_count} entries',
    },
  },
};

export default da;
