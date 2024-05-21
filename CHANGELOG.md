## [1.14.1-release-candidate.1](https://github.com/mParticle/aquarium/compare/v1.14.0...v1.14.1-release-candidate.1) (2024-05-21)


### Bug Fixes

* fixes path to be / on UPS cookie creation options ([#240](https://github.com/mParticle/aquarium/issues/240)) ([0cebf44](https://github.com/mParticle/aquarium/commit/0cebf44966190c555d0a9ffb846074ac3304f2dd))

# [1.14.0](https://github.com/mParticle/aquarium/compare/v1.13.0...v1.14.0) (2024-05-20)


### Features

* UPS code ported from Nancy ([#207](https://github.com/mParticle/aquarium/issues/207)) ([cc153af](https://github.com/mParticle/aquarium/commit/cc153afc874dcacb6f2ee272559389dbdcb43d59))

# [1.13.0-ups-utils.2](https://github.com/mParticle/aquarium/compare/v1.13.0-ups-utils.1...v1.13.0-ups-utils.2) (2024-05-15)

# [1.13.0-ups-utils.1](https://github.com/mParticle/aquarium/compare/v1.12.0...v1.13.0-ups-utils.1) (2024-05-14)

# [1.13.0](https://github.com/mParticle/aquarium/compare/v1.12.0...v1.13.0) (2024-05-15)


### Features

* Adds SuitesReminder hook to get a consistent look across platforms for the reminder notification ([#221](https://github.com/mParticle/aquarium/issues/221)) ([533428e](https://github.com/mParticle/aquarium/commit/533428e64de4e48e8e4d016df7c73f807a54851b))
* export UPS interfaces ([ffcff89](https://github.com/mParticle/aquarium/commit/ffcff89f694639a62713b45b573a5bd006805226))
* uPS code ported from Nancy with tests passing ([182be3d](https://github.com/mParticle/aquarium/commit/182be3dc6cda64ed4a6d5a6665da771e5fea33db))

# [1.12.0](https://github.com/mParticle/aquarium/compare/v1.11.1...v1.12.0) (2024-05-14)


### Bug Fixes

* **cascader:** makes cascader use the aquarium configprovider and theme ([21800e2](https://github.com/mParticle/aquarium/commit/21800e2cabc004c1b15f674bcd42b7e842ccc750))
* correct QueryItem Cascader and Action cosmetic bugs/flaws ([f5e6032](https://github.com/mParticle/aquarium/commit/f5e6032b8c9a31696daf97266ae26ca5a8d6be5c))
* correct usage of Typography in Watermark.stories.tsx ([f8b32cb](https://github.com/mParticle/aquarium/commit/f8b32cbf6754bf20bc2c41533007cfa6e179124e))
* fix broken stories due to typography update ([d64be86](https://github.com/mParticle/aquarium/commit/d64be86812a4c0d70799478f939bc9a89866c251))
* fix QueryItem.ValueSelector.Cascader's selectedDisplayValue type ([e74053d](https://github.com/mParticle/aquarium/commit/e74053d936776eddd5287635ba7cfd6f29f25065))
* **input:** wraps Input.Search in Aquarium ConfigProvider ([0fbba18](https://github.com/mParticle/aquarium/commit/0fbba18bda7e810000f11c8f6047efaebda6783e))
* make onChange prop of QueryItem InputText optional ([7a1532f](https://github.com/mParticle/aquarium/commit/7a1532fa2a8d10152cb947a1079da7111abdab96))
* make QueryItem Cascader options reactive ([50f11bc](https://github.com/mParticle/aquarium/commit/50f11bc353c9eee98e705cc70474b8834e922967))
* minor compatibility changes to QueryItem Qualifier and Cascader ([5065bdd](https://github.com/mParticle/aquarium/commit/5065bddc2d72c1c95a69d0c40a84d83d08e2b7b9))
* minor tweaks to TextInput to make it fully compatible ([be5deab](https://github.com/mParticle/aquarium/commit/be5deab8b00d81131a9e1dccc10c451421208ec1))
* PR review suggestions ([f1ed504](https://github.com/mParticle/aquarium/commit/f1ed50480001440e742ba6278babc9bb78567686))
* **queryitem:** change Input.Search to Input in Cascader's popover to prevent preact type error ([80b1469](https://github.com/mParticle/aquarium/commit/80b146960e2f4e8f05683a334f3f6bc012b71a1e))
* remove \dist files accidentally committed ([ef5a16b](https://github.com/mParticle/aquarium/commit/ef5a16bf22c77e2cea9c7b80503877cb610e4613))
* remove circle-dashed.svg, it's a duplicate ([aac4829](https://github.com/mParticle/aquarium/commit/aac4829dc209e3c9346c9be3925ba84c92c3625a))
* remove LESS syntax from query-item.css ([643402c](https://github.com/mParticle/aquarium/commit/643402ca5e379867edc05d830f5ae3f862d18024))
* **typography:** fix exporting/structure of Typography and its subtypes ([cd097f8](https://github.com/mParticle/aquarium/commit/cd097f8f5cb26c5ee476ec90cb3b8a2374f4b3c9))
* update more typography stories ([cd3344c](https://github.com/mParticle/aquarium/commit/cd3344ca7cdd9fcf8a6d1349f0d710082fca2149))
* yet more typography corrections ([81fce66](https://github.com/mParticle/aquarium/commit/81fce66d6d4e420b9dc5b6e3245de35b97a8fe14))


### Features

* add Action QueryItem ([f76ea2b](https://github.com/mParticle/aquarium/commit/f76ea2b2fa19fcd4f546b197a83a3c20a78c54c5))
* add Help Icon ([6bae0ed](https://github.com/mParticle/aquarium/commit/6bae0ed935674e7a59352e7f5cd1dfc38330c0a5))
* add loadData functionality to QueryItem Cascader ([ced4994](https://github.com/mParticle/aquarium/commit/ced499425088177946d986051791816beab98dc1))
* add placeholder to QueryItem's TextInput ([30bde49](https://github.com/mParticle/aquarium/commit/30bde4942572e70ca67654c1c630bd73f5558a30))
* add QueryItem-related icons ([89fb3b8](https://github.com/mParticle/aquarium/commit/89fb3b85e6b84e57b84d4bf6c93642fd04586ce6))
* add QueryItem.Text component ([8f0b7bd](https://github.com/mParticle/aquarium/commit/8f0b7bd3ec432c0ffc985e0bd255e10f6f9feb16))
* add value props to Qualifier and Cascader ([16042d7](https://github.com/mParticle/aquarium/commit/16042d7079f8175a1665990ac150567e03e421ad))
* intial add of QueryItem.ValueSelector.Cascader ([c022aa2](https://github.com/mParticle/aquarium/commit/c022aa2c7870ace003346b123893cc765706c178))
* **queryitem:** adding onchange and converting error danger zone text ([91e945f](https://github.com/mParticle/aquarium/commit/91e945f43bab6debcb0efb59f47111d1aba7a132))
* **queryitem:** adding QueryItem.Qualifier component ([1fe60d8](https://github.com/mParticle/aquarium/commit/1fe60d82ca2c72d347b78c8edbf26e631a36a7ff))
* **queryitem:** updating styles and adding error message to qualifier ([fa8a8da](https://github.com/mParticle/aquarium/commit/fa8a8dabe61546f535196054191efcd4ae7ef5ea))
* rework Cascader OnChange ([a77c44f](https://github.com/mParticle/aquarium/commit/a77c44f6802543ddca2e6c928ba06cf49ad25967))

## [1.11.1](https://github.com/mParticle/aquarium/compare/v1.11.0...v1.11.1) (2024-05-07)

## [1.11.1-global-nav-settings-button.1](https://github.com/mParticle/aquarium/compare/v1.11.0...v1.11.1-global-nav-settings-button.1) (2024-04-30)

# [1.11.0](https://github.com/mParticle/aquarium/compare/v1.10.0...v1.11.0) (2024-04-23)


### Features

* Allows publishing npm versions from feature branches ([#186](https://github.com/mParticle/aquarium/issues/186)) ([044c117](https://github.com/mParticle/aquarium/commit/044c1171192865c82dab37ab87981dc27648713d))

# [1.11.0-icon-component.1](https://github.com/mParticle/aquarium/compare/v1.10.0...v1.11.0-icon-component.1) (2024-04-16)


### Features

* Allows publishing npm versions from feature branches ([#186](https://github.com/mParticle/aquarium/issues/186)) ([044c117](https://github.com/mParticle/aquarium/commit/044c1171192865c82dab37ab87981dc27648713d))

# [1.11.0-release-process.1](https://github.com/mParticle/aquarium/compare/v1.10.0...v1.11.0-release-process.1) (2024-03-29)


### Features

* allows publishing from feature branches ([eb32f58](https://github.com/mParticle/aquarium/commit/eb32f58e8b616c27c51a081e56e4e8f8d751a171))

# [1.10.0](https://github.com/mParticle/aquarium/compare/v1.9.5...v1.10.0) (2024-03-29)

### Bug Fixes

- use semantic release token ([7af705c](https://github.com/mParticle/aquarium/commit/7af705c8d6f01364d30d7ff64f516b7f4b5f86e7))

### Features

- Allows publishing on dev branch/distribution channel ([#162](https://github.com/mParticle/aquarium/issues/162)) ([39530fa](https://github.com/mParticle/aquarium/commit/39530fad9b6c95750355fe776e636ba3be6c3d38))

## [1.9.6-dev.1](https://github.com/mParticle/aquarium/compare/v1.9.5...v1.9.6-dev.1) (2024-03-25)

## [1.8.3-dev.3](https://github.com/mParticle/aquarium/compare/v1.8.3-dev.2...v1.8.3-dev.3) (2024-03-20)
