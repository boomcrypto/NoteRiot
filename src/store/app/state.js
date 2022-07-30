export default () => {
  return {
    user: null,
    username: null,
    loading: false,
    loadingMsg: "",
    labelFilter: "all",
    colorFilter: "",
    tagFilter: "",
    sortBy: "createdAt",
    mode: "grid",
    sortDirection: "asc",
    searchTerm: "",
    contacts: [],
    noteColors: [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
      "gray",
      "teal",
    ],
    notes: [
      {
        id: "eWRhpRV",
        color: "",
        notebook: 0,
        groupId: "",
        created: 1558474200003,
        modified: 1574584559000,
        description: "",
        fave: true,
        trash: false,
        tags: [],
        text: "Arm: 112233 Disarm: 332211  If something goes wrong call Jason at 555-999-1110. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        attachments: [
          {
            tagid: 11234,
            url: "https://uploads-ssl.webflow.com/5e8cb54bde9c8f3e5e4933d0/5e8cb54bde9c8f24f14933f1_layton-diament-HkKc1JOSiJU-unsplash.jpg",
            type: "jpeg",
          },
        ],
        title: "Sample Note 1: 1 Image / Thumbnail note",
        shares: [],
      },
      {
        id: "nYrnfYEv",
        color: "",
        notebook: 0,
        groupId: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: true,
        trash: false,
        tags: [],
        text: "These are two pictures I took that one day, and I like them.",
        attachments: [
          {
            tagid: 11234,
            url: "https://uploads-ssl.webflow.com/5e8cb54bde9c8f3e5e4933d0/5e8cb54bde9c8fe6914933f2_layton-diament-GdJU2hYnfqQ-unsplash.jpg",
            type: "jpeg",
          },
          {
            tagid: 11234,
            url: "https://uploads-ssl.webflow.com/5e8cb54bde9c8f3e5e4933d0/5e8cb54bde9c8f5f6f4933f0_layton-diament-Dsn8lyptvzA-unsplash.jpg",
            type: "jpeg",
          },
        ],
        title:
          "Sample Note 2: 2 images / thumbnails are on this note with a longer title",
        shares: [],
      },
      {
        id: "dogPzIz8",
        groupId: "",
        notebook: 0,
        color: "",
        created: 1558474200000,
        modified: 1558474201032,
        description: "",
        fave: true,
        trash: false,
        tags: [],
        text: "These are three pictures I took that one day, because I'm a maniac. Also I've attached 10 million other files to this note, but you don't see a thumbnail for all of",
        attachments: [
          {
            tagid: 11234,
            url: "https://uploads-ssl.webflow.com/5e8cb54bde9c8f3e5e4933d0/5e8cb54bde9c8f44a1493415_hou-ketu-641456-unsplash.jpg",
            type: "jpeg",
          },
          {
            tagid: 11234,
            url: "https://uploads-ssl.webflow.com/5e8cb54bde9c8f3e5e4933d0/5e8cb54bde9c8f77ec493416_arto-marttinen-79383.jpg",
            type: "jpeg",
          },
          {
            tagid: 11234,
            url: "https://uploads-ssl.webflow.com/5e8cb54bde9c8f3e5e4933d0/5e8cb54bde9c8f89f5493418_mariusz-prusaczyk-185181.jpg",
            type: "jpeg",
          },
        ],
        title: "Sample Note 3 - 3 images / thumbnails (or more!)",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "2WEKaVNO",
        groupId: "",
        notebook: 0,
        color: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: ["Onboarding", "Example Tag 1"],
        text: "<p>Tags are a great way to organize your notes. You can add as many tags as you like to a note and then use the filter bar to select the tags that you&rsquo;d like to see.</p><p>To add a tag to your notes, you can select the icon that looks like 3 dots on the right of the note (it will appear when you hover on the note &mdash; if on mobile, you&rsquo;ll need to hold down to see the 3 dot icon). Then you can either create a new tag or select from an existing tag.</p><p>You can also manage all your existing tags by selecting your profile icon and selecting &ldquo;Manage tags.&rdquo;</p>",
        attachments: [],
        title: "Sample Note #4, with tags",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "46Juzcyx",
        groupId: "",
        notebook: 0,
        color: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: ["Onboarding", "Example Tag 1"],
        text: "<p>You can create and edit notes like you would create and edit most digital docs. Just play around with the toolbar above to see what&rsquo;s possible, but check out a few ideas below.</p><p>You can make text <strong>bold</strong>, <em>italic</em>, underlined.</p><h1>You can make headers large&hellip;</h1><h4>&hellip;or small.</h4><ul><li>You</li><li>Can</li><li>Use</li><li>Bullets</li></ul><ol><li>You</li><li>Can</li><li>Use</li><li>Numbered</li><li>Lists</li></ol><p>You can left align</p><p>You can center align</p><p>You can right align</p><p>You can add links, like landho.app</a></p><p>You can add attachments like this image':</p><p>[find a nice image to put here]</p><p>&hellip;or other attachments like this one':</p><p>[find a PDF or other file to put here]</p>",
        attachments: [
          {
            tagid: 11234,
            url: "/images/sample-thumb-1.jpg",
            type: "jpeg",
          },
          {
            tagid: 11235,
            url: "/images/generic-thumb-pdf.svg",
            type: "jpeg",
          },
        ],
        title: "Sample Note 5, dude",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "23TplPdS",
        groupId: "",
        notebook: 0,
        color: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: ["Onboarding", "Example Tag 2"],
        text: "<ul><li>You can toggle on and off the filter bar by selecting the filter icon in the main toolbar</li><li>You can switch between a list layout and grid layout by selecting the layout icon in the main toolbar</li><li>You can find other features like backing up notes, importing notes, access to support, by selecting the profile image in the top right corner of the main toolbar</li><li>You can archive a note by selecting the 3 dot icon on right of every note, which is accessible by hovering over the note on desktop, or by holding down on the note on mobile. You can access all your archived notes by opening the filter and selecting archive.</li><li>Don&rsquo;t forget you can easily search for you notes using the search bar in the main toolbar. Enter any character you want, and if it appears in a note, it will appear in your results.</li></ul>",
        attachments: [],
        title: "Sample Note 6",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "asdf45t6",
        groupId: "",
        notebook: 0,
        color: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: ["black", "Onboarding"],
        text: "<p>You can create and edit notes like you would create and edit most digital docs. Just play around with the toolbar above to see what&rsquo;s possible, but check out a few ideas below.</p><p>You can make text <strong>bold</strong>, <em>italic</em>, underlined.</p><h1>You can make headers large&hellip;</h1><h4>&hellip;or small.</h4><ul><li>You</li><li>Can</li><li>Use</li><li>Bullets</li></ul><ol><li>You</li><li>Can</li><li>Use</li><li>Numbered</li><li>Lists</li></ol><p>You can left align</p><p>You can center align</p><p>You can right align</p><p>You can add links, like landho.app</a></p><p>You can add attachments like this image':</p><p>[find a nice image to put here]</p><p>&hellip;or other attachments like this one':</p><p>[find a PDF or other file to put here]</p>",
        attachments: [],
        title: "Sample note #7",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "87s6ertv8a3",
        groupId: "",
        notebook: 0,
        color: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: ["Blockstack"],
        text: "<p>You can create and edit notes like you would create and edit most digital docs. Just play around with the toolbar above to see what&rsquo;s possible, but check out a few ideas below.</p><p>You can make text <strong>bold</strong>, <em>italic</em>, underlined.</p><h1>You can make headers large&hellip;</h1><h4>&hellip;or small.</h4><ul><li>You</li><li>Can</li><li>Use</li><li>Bullets</li></ul><ol><li>You</li><li>Can</li><li>Use</li><li>Numbered</li><li>Lists</li></ol><p>You can left align</p><p>You can center align</p><p>You can right align</p><p>You can add links, like landho.app</a></p><p>You can add attachments like this image':</p><p>[find a nice image to put here]</p><p>&hellip;or other attachments like this one':</p><p>[find a PDF or other file to put here]</p>",
        attachments: [],
        title: "Sample Note #8",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "56gdsrtguk",
        notebook: 0,
        color: "",
        groupId: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: ["Example Tag 1"],
        text: "<ul><li>You can toggle on and off the filter bar by selecting the filter icon in the main toolbar</li><li>You can switch between a list layout and grid layout by selecting the layout icon in the main toolbar</li><li>You can find other features like backing up notes, importing notes, access to support, by selecting the profile image in the top right corner of the main toolbar</li><li>You can archive a note by selecting the 3 dot icon on right of every note, which is accessible by hovering over the note on desktop, or by holding down on the note on mobile. You can access all your archived notes by opening the filter and selecting archive.</li><li>Don&rsquo;t forget you can easily search for you notes using the search bar in the main toolbar. Enter any character you want, and if it appears in a note, it will appear in your results.</li></ul>",
        attachments: [],
        title: "Sample Note Numero Nine",
        modifiedBy: "layton.id",
        shares: [],
      },
      {
        id: "9f0ty",
        notebook: 0,
        color: "",
        groupId: "",
        created: 1558474200000,
        modified: 1558474200000,
        description: "",
        fave: false,
        trash: false,
        tags: [],
        text: "<ul><li>You can toggle on and off the filter bar by selecting the filter icon in the main toolbar</li><li>You can switch between a list layout and grid layout by selecting the layout icon in the main toolbar</li><li>You can find other features like backing up notes, importing notes, access to support, by selecting the profile image in the top right corner of the main toolbar</li><li>You can archive a note by selecting the 3 dot icon on right of every note, which is accessible by hovering over the note on desktop, or by holding down on the note on mobile. You can access all your archived notes by opening the filter and selecting archive.</li><li>Don&rsquo;t forget you can easily search for you notes using the search bar in the main toolbar. Enter any character you want, and if it appears in a note, it will appear in your results.</li></ul>",
        attachments: [],
        title: "Sample Note 10",
        modifiedBy: "layton.id",
        shares: [],
      },
    ],
  };
};
