# AlbotAPISDK

Types:

- <code><a href="./src/resources/top-level.ts">GetRootResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">getRoot</a>() -> unknown</code>

# Oauth2

Types:

- <code><a href="./src/resources/oauth2.ts">PlainAPIResponse</a></code>
- <code><a href="./src/resources/oauth2.ts">URLAPIResponse</a></code>

Methods:

- <code title="post /oauth2/callback">client.oauth2.<a href="./src/resources/oauth2.ts">callback</a>({ ...params }) -> PlainAPIResponse</code>
- <code title="post /oauth2/logout">client.oauth2.<a href="./src/resources/oauth2.ts">logout</a>() -> PlainAPIResponse</code>
- <code title="get /oauth2/login">client.oauth2.<a href="./src/resources/oauth2.ts">redirect</a>({ ...params }) -> URLAPIResponse</code>

# Shards

Types:

- <code><a href="./src/resources/shards.ts">ShardListResponse</a></code>
- <code><a href="./src/resources/shards.ts">ShardAssignResponse</a></code>
- <code><a href="./src/resources/shards.ts">ShardGetConnectionCommandsResponse</a></code>

Methods:

- <code title="get /shards">client.shards.<a href="./src/resources/shards.ts">list</a>({ ...params }) -> ShardListResponse</code>
- <code title="get /shards/assign">client.shards.<a href="./src/resources/shards.ts">assign</a>() -> ShardAssignResponse</code>
- <code title="get /shards/{shard_id}/connection_commands">client.shards.<a href="./src/resources/shards.ts">getConnectionCommands</a>(shardID, { ...params }) -> ShardGetConnectionCommandsResponse</code>
- <code title="post /shards/{shard_id}/metrics">client.shards.<a href="./src/resources/shards.ts">postMetrics</a>(shardID, { ...params }) -> PlainAPIResponse</code>
- <code title="post /shards/{shard_id}/release">client.shards.<a href="./src/resources/shards.ts">release</a>(shardID) -> PlainAPIResponse</code>

# Guilds

Types:

- <code><a href="./src/resources/guilds/guilds.ts">ListSubscriptions</a></code>
- <code><a href="./src/resources/guilds/guilds.ts">GuildCreateConnectionStatesResponse</a></code>

Methods:

- <code title="post /guilds/{guild_id}">client.guilds.<a href="./src/resources/guilds/guilds.ts">create</a>(guildID) -> PlainAPIResponse</code>
- <code title="delete /guilds/{guild_id}">client.guilds.<a href="./src/resources/guilds/guilds.ts">delete</a>(guildID) -> PlainAPIResponse</code>
- <code title="post /guilds/{guild_id}/connection_states">client.guilds.<a href="./src/resources/guilds/guilds.ts">createConnectionStates</a>(guildID, { ...params }) -> GuildCreateConnectionStatesResponse</code>
- <code title="post /guilds/{guild_id}/quick_reports">client.guilds.<a href="./src/resources/guilds/guilds.ts">createQuickReport</a>(guildID, { ...params }) -> PlainAPIResponse</code>
- <code title="get /guilds/{guild_id}/subscriptions">client.guilds.<a href="./src/resources/guilds/guilds.ts">listSubscriptions</a>(guildID) -> ListSubscriptions</code>

## Dict

Types:

- <code><a href="./src/resources/guilds/dict.ts">DictRetrieveResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/dict">client.guilds.dict.<a href="./src/resources/guilds/dict.ts">retrieve</a>(guildID) -> DictRetrieveResponse</code>
- <code title="delete /guilds/{guild_id}/dict">client.guilds.dict.<a href="./src/resources/guilds/dict.ts">delete</a>(guildID) -> PlainAPIResponse</code>
- <code title="put /guilds/{guild_id}/dict">client.guilds.dict.<a href="./src/resources/guilds/dict.ts">replace</a>(guildID, { ...params }) -> PlainAPIResponse</code>

## Settings

Types:

- <code><a href="./src/resources/guilds/settings.ts">SettingRetrieveResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/settings">client.guilds.settings.<a href="./src/resources/guilds/settings.ts">retrieve</a>(guildID) -> SettingRetrieveResponse</code>
- <code title="post /guilds/{guild_id}/settings">client.guilds.settings.<a href="./src/resources/guilds/settings.ts">update</a>(guildID, { ...params }) -> PlainAPIResponse</code>
- <code title="delete /guilds/{guild_id}/settings">client.guilds.settings.<a href="./src/resources/guilds/settings.ts">delete</a>(guildID) -> PlainAPIResponse</code>

## CharacterUsage

Types:

- <code><a href="./src/resources/guilds/character-usage.ts">CharacterUsage</a></code>
- <code><a href="./src/resources/guilds/character-usage.ts">CharacterUsages</a></code>
- <code><a href="./src/resources/guilds/character-usage.ts">CharacterUsageRetrieveResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/character_usage">client.guilds.characterUsage.<a href="./src/resources/guilds/character-usage.ts">retrieve</a>(guildID) -> CharacterUsageRetrieveResponse</code>
- <code title="post /guilds/{guild_id}/character_usage">client.guilds.characterUsage.<a href="./src/resources/guilds/character-usage.ts">update</a>(guildID, { ...params }) -> PlainAPIResponse</code>

## TrustedRoles

Types:

- <code><a href="./src/resources/guilds/trusted-roles.ts">TrustedRoleListResponse</a></code>

Methods:

- <code title="put /guilds/{guild_id}/trusted_roles">client.guilds.trustedRoles.<a href="./src/resources/guilds/trusted-roles.ts">update</a>(guildID, { ...params }) -> PlainAPIResponse</code>
- <code title="get /guilds/{guild_id}/trusted_roles">client.guilds.trustedRoles.<a href="./src/resources/guilds/trusted-roles.ts">list</a>(guildID) -> TrustedRoleListResponse</code>

## ConnectionCommand

Types:

- <code><a href="./src/resources/guilds/connection-command.ts">ConnectionCommand</a></code>
- <code><a href="./src/resources/guilds/connection-command.ts">ConnectionCommandRetrieveResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/connection_command">client.guilds.connectionCommand.<a href="./src/resources/guilds/connection-command.ts">retrieve</a>(guildID) -> ConnectionCommandRetrieveResponse</code>
- <code title="put /guilds/{guild_id}/connection_command">client.guilds.connectionCommand.<a href="./src/resources/guilds/connection-command.ts">update</a>(guildID, { ...params }) -> PlainAPIResponse</code>

## MessageLinkExpandPreference

Types:

- <code><a href="./src/resources/guilds/message-link-expand-preference.ts">MessageLinkExpandPreference</a></code>
- <code><a href="./src/resources/guilds/message-link-expand-preference.ts">MessageLinkExpandPreferenceRetrieveResponse</a></code>

Methods:

- <code title="get /guilds/{guild_id}/message_link_expand_preference">client.guilds.messageLinkExpandPreference.<a href="./src/resources/guilds/message-link-expand-preference.ts">retrieve</a>(guildID) -> MessageLinkExpandPreferenceRetrieveResponse</code>
- <code title="post /guilds/{guild_id}/message_link_expand_preference">client.guilds.messageLinkExpandPreference.<a href="./src/resources/guilds/message-link-expand-preference.ts">update</a>(guildID, { ...params }) -> PlainAPIResponse</code>

# Users

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">MeRetrieveInfoResponse</a></code>

Methods:

- <code title="post /users/me/checkout-session">client.users.me.<a href="./src/resources/users/me/me.ts">createCheckoutSession</a>({ ...params }) -> URLAPIResponse</code>
- <code title="get /users/me/info">client.users.me.<a href="./src/resources/users/me/me.ts">retrieveInfo</a>() -> MeRetrieveInfoResponse</code>

### Subscriptions

Types:

- <code><a href="./src/resources/users/me/subscriptions.ts">SubscriptionActivate</a></code>
- <code><a href="./src/resources/users/me/subscriptions.ts">SubscriptionRenew</a></code>

Methods:

- <code title="get /users/me/subscriptions">client.users.me.subscriptions.<a href="./src/resources/users/me/subscriptions.ts">list</a>() -> ListSubscriptions</code>
- <code title="post /users/me/subscriptions/{sub_id}/activate">client.users.me.subscriptions.<a href="./src/resources/users/me/subscriptions.ts">activate</a>(subID, { ...params }) -> PlainAPIResponse</code>
- <code title="post /users/me/subscriptions/{sub_id}/cancel">client.users.me.subscriptions.<a href="./src/resources/users/me/subscriptions.ts">cancel</a>(subID) -> PlainAPIResponse</code>
- <code title="post /users/me/subscriptions/{sub_id}/renew">client.users.me.subscriptions.<a href="./src/resources/users/me/subscriptions.ts">renew</a>(subID, { ...params }) -> PlainAPIResponse</code>

### Guilds

Types:

- <code><a href="./src/resources/users/me/guilds.ts">PartialGuild</a></code>
- <code><a href="./src/resources/users/me/guilds.ts">GuildListResponse</a></code>
- <code><a href="./src/resources/users/me/guilds.ts">GuildRetrieveInfoResponse</a></code>

Methods:

- <code title="get /users/me/guilds">client.users.me.guilds.<a href="./src/resources/users/me/guilds.ts">list</a>({ ...params }) -> GuildListResponse</code>
- <code title="get /users/me/guilds/{guild_id}/info">client.users.me.guilds.<a href="./src/resources/users/me/guilds.ts">retrieveInfo</a>(guildID) -> GuildRetrieveInfoResponse</code>

## Subscriptions

Methods:

- <code title="get /users/{user_id}/subscriptions">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">list</a>(userID) -> ListSubscriptions</code>
- <code title="post /users/{user_id}/subscriptions/{sub_id}/activate">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">activate</a>(subID, { ...params }) -> PlainAPIResponse</code>
- <code title="post /users/{user_id}/subscriptions/{sub_id}/cancel">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">cancel</a>(subID, { ...params }) -> PlainAPIResponse</code>
- <code title="post /users/{user_id}/subscriptions/{sub_id}/renew">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">renew</a>(subID, { ...params }) -> PlainAPIResponse</code>

# Metrics

Types:

- <code><a href="./src/resources/metrics.ts">MetricRetrieveResponse</a></code>

Methods:

- <code title="get /metrics">client.metrics.<a href="./src/resources/metrics.ts">retrieve</a>() -> MetricRetrieveResponse</code>

# Webhooks

Methods:

- <code title="post /webhooks/stripe">client.webhooks.<a href="./src/resources/webhooks.ts">createStripe</a>() -> PlainAPIResponse</code>
