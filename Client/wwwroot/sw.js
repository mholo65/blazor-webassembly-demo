if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,o,a)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(o.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=a(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-ecc91278"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"_content/Blazored.Toast/blazored-toast.css",revision:"6d46655505354e03431ca45e569357bc"},{url:"_content/Blazored.Toast/blazored-toast.min.css",revision:"fc241be720a29530f53eef10f64cd46a"},{url:"_content/Blazored.Typeahead/blazored-typeahead.css",revision:"d8b4c68b2341f45f4d51edbcba7003c2"},{url:"_content/Blazored.Typeahead/blazored-typeahead.js",revision:"3f88e7cd7f2b07ed326931df27e6bd9d"},{url:"_content/Microsoft.AspNetCore.Components.WebAssembly.Authentication/AuthenticationService.js",revision:"5dbb7e8ce6524d7e93b1c67e74554a0b"},{url:"_framework/_bin/Blazored.FluentValidation.dll",revision:"e6b07097d94e2af83589aebbaa8d888c"},{url:"_framework/_bin/Blazored.Toast.dll",revision:"b114d7ae5688adb5ffa03fda22311e45"},{url:"_framework/_bin/Blazored.Typeahead.dll",revision:"d5f132af402315dacac057e7e3813982"},{url:"_framework/_bin/ConfTool.Client.dll",revision:"4118a641c32b32f65384fe42f76ebb41"},{url:"_framework/_bin/ConfTool.Client.pdb",revision:"7093d98dd9183d23108ae2b865d5ccb8"},{url:"_framework/_bin/ConfTool.Shared.dll",revision:"37b8598a6435566bddebad608381fc4d"},{url:"_framework/_bin/ConfTool.Shared.pdb",revision:"3c23237b3165f9dca2ae370cebe99478"},{url:"_framework/_bin/FluentValidation.dll",revision:"b2b8f1e70976a3542d7d2c5a7357b34e"},{url:"_framework/_bin/Google.Protobuf.dll",revision:"95a688e47426b71012dbb7aebc2be8e9"},{url:"_framework/_bin/Google.Protobuf.pdb",revision:"277625e9b5958239d377ea0a79477509"},{url:"_framework/_bin/Grpc.Core.Api.dll",revision:"bdf1c5968160b4dade9963b3949e29bb"},{url:"_framework/_bin/Grpc.Core.Api.pdb",revision:"54899fbaeaaf8a524b0b73557560ccdb"},{url:"_framework/_bin/Grpc.Net.Client.dll",revision:"17d64929ddd4ec08da094272f0de92c8"},{url:"_framework/_bin/Grpc.Net.Client.pdb",revision:"b946372448e09102e137c18d1f6bfe0c"},{url:"_framework/_bin/Grpc.Net.Client.Web.dll",revision:"7000def523e258bb2b5cb34be9754ef2"},{url:"_framework/_bin/Grpc.Net.Client.Web.pdb",revision:"03ab9403b673be11bf2a524026d213fa"},{url:"_framework/_bin/Grpc.Net.Common.dll",revision:"3fb2a54b84e4a0c93d5ade7a41dcc466"},{url:"_framework/_bin/Grpc.Net.Common.pdb",revision:"304a633743c28a829cc8fcf86543bcdb"},{url:"_framework/_bin/LiveSharp.Interfaces.dll",revision:"811491ef769534b22a7d1d6591cf5e9a"},{url:"_framework/_bin/LiveSharp.Runtime.BlazorWasm.dll",revision:"379629dd3da7d143803050f8020e79b4"},{url:"_framework/_bin/LiveSharp.ServerClient.dll",revision:"6a468469f9f4546e6248492d589a57a1"},{url:"_framework/_bin/Microsoft.AspNetCore.Authorization.dll",revision:"214c45cb50c0e06935de41ff68273069"},{url:"_framework/_bin/Microsoft.AspNetCore.Components.Authorization.dll",revision:"9e9ff6bd3b53cbd68f312f26d6f84083"},{url:"_framework/_bin/Microsoft.AspNetCore.Components.dll",revision:"d59837098b21c76c810b448870d8cea0"},{url:"_framework/_bin/Microsoft.AspNetCore.Components.Forms.dll",revision:"42816565d6c28f331532ca86eca22567"},{url:"_framework/_bin/Microsoft.AspNetCore.Components.Web.dll",revision:"eb21890d3fd92c590ebe53cee8ef3327"},{url:"_framework/_bin/Microsoft.AspNetCore.Components.WebAssembly.Authentication.dll",revision:"1b4afae1a79b347159cd014fe5b65599"},{url:"_framework/_bin/Microsoft.AspNetCore.Components.WebAssembly.dll",revision:"af8f474346fb3a71248c4c257b0983bc"},{url:"_framework/_bin/Microsoft.AspNetCore.Connections.Abstractions.dll",revision:"cb3cac360f15b5372a30727eb49d1e55"},{url:"_framework/_bin/Microsoft.AspNetCore.Http.Connections.Client.dll",revision:"30bc105ca1d36ed8df2a1428efd532d1"},{url:"_framework/_bin/Microsoft.AspNetCore.Http.Connections.Common.dll",revision:"0768793802ebbfe672c57c6f581470d2"},{url:"_framework/_bin/Microsoft.AspNetCore.Http.Features.dll",revision:"437003e2fef0d86ec17e218c3f601b1b"},{url:"_framework/_bin/Microsoft.AspNetCore.Metadata.dll",revision:"9ceaf073e113967aeb30e63a99aa3f0e"},{url:"_framework/_bin/Microsoft.AspNetCore.SignalR.Client.Core.dll",revision:"2441169d89affdc0ba2bf24b9cdfc0e0"},{url:"_framework/_bin/Microsoft.AspNetCore.SignalR.Client.dll",revision:"11ba9acda48445ae6c251908dc25e64b"},{url:"_framework/_bin/Microsoft.AspNetCore.SignalR.Common.dll",revision:"6ace0960ad8a9b0f938d9fd3e82a2d0e"},{url:"_framework/_bin/Microsoft.AspNetCore.SignalR.Protocols.Json.dll",revision:"2a0d39980b809a32aba4aeab683729c6"},{url:"_framework/_bin/Microsoft.Bcl.AsyncInterfaces.dll",revision:"2d270ddbca547ab26b5be6e16e4825d7"},{url:"_framework/_bin/Microsoft.CSharp.dll",revision:"874eb0bb383e41bba112aca3e4508b86"},{url:"_framework/_bin/Microsoft.Extensions.Configuration.Abstractions.dll",revision:"52b28bd7f803c3dafa5c3c9e5cc9ef73"},{url:"_framework/_bin/Microsoft.Extensions.Configuration.Binder.dll",revision:"05f686bb6cd7ecb0a14ada6799e36b81"},{url:"_framework/_bin/Microsoft.Extensions.Configuration.dll",revision:"3bacb18c478c570c063955593e2139b5"},{url:"_framework/_bin/Microsoft.Extensions.Configuration.FileExtensions.dll",revision:"bdb4e7fda4e0a67752823aaec6c0356c"},{url:"_framework/_bin/Microsoft.Extensions.Configuration.Json.dll",revision:"88ab09e8f7ecb1be18f46d2b99b7e125"},{url:"_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll",revision:"650d8e85c1b4fbecf33529786ea7a1a7"},{url:"_framework/_bin/Microsoft.Extensions.DependencyInjection.dll",revision:"cc96abef411d386e1d13f1c3b9bae117"},{url:"_framework/_bin/Microsoft.Extensions.FileProviders.Abstractions.dll",revision:"63c70cc87518a8097c5c50b2e1898985"},{url:"_framework/_bin/Microsoft.Extensions.FileProviders.Physical.dll",revision:"4cc355b0e88a8e1399a2e1c31f46a082"},{url:"_framework/_bin/Microsoft.Extensions.FileSystemGlobbing.dll",revision:"a7feddc0dc4acd4aa2d486eb811a62fb"},{url:"_framework/_bin/Microsoft.Extensions.Http.dll",revision:"9092342fe809fbb8bd907f4babfd3572"},{url:"_framework/_bin/Microsoft.Extensions.Logging.Abstractions.dll",revision:"7468b6f6aea08fc14f61b7856e0fcb4e"},{url:"_framework/_bin/Microsoft.Extensions.Logging.dll",revision:"bfffe356ba662d1e315cf7fcbe188ea9"},{url:"_framework/_bin/Microsoft.Extensions.Options.dll",revision:"23a3b38685a020f11d96103cc5323cb4"},{url:"_framework/_bin/Microsoft.Extensions.Primitives.dll",revision:"0617c25c9ff65068dd9bcc14f808de33"},{url:"_framework/_bin/Microsoft.JSInterop.dll",revision:"1b33c2458185341f3921c249ddefb9b1"},{url:"_framework/_bin/Microsoft.JSInterop.WebAssembly.dll",revision:"e5309ec4cb0d289ab7a7dc8eef0aaac0"},{url:"_framework/_bin/Mono.Security.dll",revision:"a9be92b2b58efc0c0799f9b611858027"},{url:"_framework/_bin/mscorlib.dll",revision:"f14f52c5a8aa109fecd9d4138f756dd4"},{url:"_framework/_bin/netstandard.dll",revision:"901e86b2642cc8acd42bd2b9df3f2b11"},{url:"_framework/_bin/protobuf-net.dll",revision:"96bcd461126ce23ebbe828d68de5a52d"},{url:"_framework/_bin/protobuf-net.Grpc.dll",revision:"1c5a7be69ad416917359fc4051685dc9"},{url:"_framework/_bin/System.Buffers.dll",revision:"b01872a747610554f8a7dc420b709a4f"},{url:"_framework/_bin/System.Collections.dll",revision:"2e70d31597416b1b178050e2924cb3e0"},{url:"_framework/_bin/System.ComponentModel.Annotations.dll",revision:"9dda45db44ba5eb5528c6651ce87421f"},{url:"_framework/_bin/System.ComponentModel.Composition.dll",revision:"af47f7484b7724f37d294cfc0874ab41"},{url:"_framework/_bin/System.ComponentModel.DataAnnotations.dll",revision:"c72a082ac37720ce957f671904bf0e11"},{url:"_framework/_bin/System.Core.dll",revision:"4fe94eec212fa4db3b951d87b1ddc30a"},{url:"_framework/_bin/System.Data.DataSetExtensions.dll",revision:"871b3ef263bc0812a0cd73564ae293be"},{url:"_framework/_bin/System.Data.dll",revision:"9bee1c343efbc13f80a208b96ffea038"},{url:"_framework/_bin/System.Diagnostics.Debug.dll",revision:"349781e91ccccdbc3c1b5119d0e407a9"},{url:"_framework/_bin/System.Diagnostics.DiagnosticSource.dll",revision:"53f704628c292df065aff647960787d2"},{url:"_framework/_bin/System.Diagnostics.Tracing.dll",revision:"f920baf89a6824917dfa5df52a7a604c"},{url:"_framework/_bin/System.dll",revision:"db735b0969144f5d254da95e5c4bac38"},{url:"_framework/_bin/System.Drawing.Common.dll",revision:"b524aebba2ed6ef93e1b7231d384ec38"},{url:"_framework/_bin/System.IO.Compression.dll",revision:"5a033352cde91b6336f5e0c7fb1f76ab"},{url:"_framework/_bin/System.IO.Compression.FileSystem.dll",revision:"221678f9238349396ac7e4513bd4de06"},{url:"_framework/_bin/System.IO.Pipelines.dll",revision:"a85995e7215c4bcfd59a5e47fbc3407b"},{url:"_framework/_bin/System.Memory.dll",revision:"6765baf3705be047bc9038a246636056"},{url:"_framework/_bin/System.Net.Http.dll",revision:"23a6bbc7179b7026134728873455663e"},{url:"_framework/_bin/System.Net.Http.Json.dll",revision:"0143016d330514920d39dc9571157001"},{url:"_framework/_bin/System.Net.Http.WebAssemblyHttpHandler.dll",revision:"aa3fd7d1ae61f52830678718a57784ea"},{url:"_framework/_bin/System.Numerics.dll",revision:"dab035c76acda089392fd47c2fe9f499"},{url:"_framework/_bin/System.Numerics.Vectors.dll",revision:"1ee97318e0b3cdb9a5506f97857428c6"},{url:"_framework/_bin/System.Private.ServiceModel.dll",revision:"fbba56f4f10079a5fcb52191d7aa2c0c"},{url:"_framework/_bin/System.Private.ServiceModel.pdb",revision:"f186b37c7102e04aafcc950a38bf5736"},{url:"_framework/_bin/System.Reflection.DispatchProxy.dll",revision:"466b21a6da217a70a17af3cfa5cb0ab9"},{url:"_framework/_bin/System.Reflection.dll",revision:"4ff98029ba9e43c8480d0c297d45d1bb"},{url:"_framework/_bin/System.Reflection.Emit.dll",revision:"dc63a8c26e3e04ad3b1365025c10cb9a"},{url:"_framework/_bin/System.Reflection.Emit.ILGeneration.dll",revision:"9652e336b4bd8930979f26e5eed54c33"},{url:"_framework/_bin/System.Reflection.Emit.Lightweight.dll",revision:"e35a6ea90074eb02b1fdf22fab0c1739"},{url:"_framework/_bin/System.Runtime.CompilerServices.Unsafe.dll",revision:"1683cb36c40907ece96c91a925f6ace6"},{url:"_framework/_bin/System.Runtime.dll",revision:"4a9c201a6a7675648dc646e3f55b02b4"},{url:"_framework/_bin/System.Runtime.Extensions.dll",revision:"b33f153f70dfb71d950a441e1c8140b3"},{url:"_framework/_bin/System.Runtime.Serialization.dll",revision:"906c36b60062d66beeed72b196d36f07"},{url:"_framework/_bin/System.Security.AccessControl.dll",revision:"139d20df11cd00968fd12d0366b13a00"},{url:"_framework/_bin/System.Security.Cryptography.Pkcs.dll",revision:"6f83027d86b26b856b031003e63611b4"},{url:"_framework/_bin/System.Security.Cryptography.Xml.dll",revision:"e161a4591998dc7786750d7e6546a523"},{url:"_framework/_bin/System.Security.dll",revision:"13dd4c6ac9757eccdb29b0248e4fc85d"},{url:"_framework/_bin/System.Security.Permissions.dll",revision:"706d8592956ef30e4a23e479e302119c"},{url:"_framework/_bin/System.Security.Principal.Windows.dll",revision:"52fbec89fa8f4d95cd03fed0ba3c38b6"},{url:"_framework/_bin/System.ServiceModel.Internals.dll",revision:"420db1e4444909f07f318cfb97bf178c"},{url:"_framework/_bin/System.ServiceModel.Primitives.dll",revision:"486a9921e575ba8f811d1577f3fac119"},{url:"_framework/_bin/System.ServiceModel.Primitives.pdb",revision:"be87a77c5496d64d5ad2e63c9d4af358"},{url:"_framework/_bin/System.Text.Encodings.Web.dll",revision:"342822bece10ea5d2533a15c740c6658"},{url:"_framework/_bin/System.Text.Json.dll",revision:"9600d21db3af3d1948b41c9ac86c1b1a"},{url:"_framework/_bin/System.Threading.Channels.dll",revision:"c27a2f6dac6361f2ac5d244b6664e123"},{url:"_framework/_bin/System.Threading.dll",revision:"6ed63f54278cdba2f49b71e9dfff689e"},{url:"_framework/_bin/System.Threading.Tasks.Extensions.dll",revision:"a8f69c6dbc000cc2ab52b0b1825df133"},{url:"_framework/_bin/System.Transactions.dll",revision:"64602e31b88d1a9a56d1b7b21b6d3f8a"},{url:"_framework/_bin/System.Xml.dll",revision:"da7277100f6d2523cd697327c543c240"},{url:"_framework/_bin/System.Xml.Linq.dll",revision:"755fa29601166580a4ad082f626baef7"},{url:"_framework/_bin/WebAssembly.Bindings.dll",revision:"c61f30d9c34f3b2ace1d546babf07a2e"},{url:"_framework/_bin/WebAssembly.Net.WebSockets.dll",revision:"0a482a9b9135b8c6bd12bb3ef70daee7"},{url:"_framework/blazor.boot.json",revision:"c97679555ae9e55d4b3631d82f325afc"},{url:"_framework/blazor.webassembly.js",revision:"6552c6b5810d85a7c05a627e2b193953"},{url:"_framework/wasm/dotnet.3.2.0.js",revision:"891bd0abae47deb711978c9f07060663"},{url:"_framework/wasm/dotnet.wasm",revision:"86b06aecf76909df3cbc15db93f4384f"},{url:"appsettings.json",revision:"b1fbebcf6ba6e59d74fcf324fe8e4ca4"},{url:"css/app.css",revision:"a7ca216d16430bb4da870292c69fd303"},{url:"css/bootstrap/bootstrap.min.css",revision:"a15c2ac3234aa8f6064ef9c1f7383c37"},{url:"css/open-iconic/font/css/open-iconic-bootstrap.min.css",revision:"f154378dc2d7b86fdf3eadb379c0b055"},{url:"css/open-iconic/font/fonts/open-iconic.eot",revision:"47151e87c5a8666791a91007de4962da"},{url:"css/open-iconic/font/fonts/open-iconic.otf",revision:"527eff645d8ead16666afb6931041279"},{url:"css/open-iconic/font/fonts/open-iconic.svg",revision:"eca2c26759a009a4a9361151efe99e74"},{url:"css/open-iconic/font/fonts/open-iconic.ttf",revision:"93cc7aa654ae36b0828716f5ec3159cd"},{url:"css/open-iconic/font/fonts/open-iconic.woff",revision:"3cf97837524dd7445e9d1462e3c4afe2"},{url:"favicon copy.ico",revision:"a206a1fee3a28e9b429bdb7fe189a1ce"},{url:"favicon.ico",revision:"4859e39ae6c0f1f428f2126a6bb32bd9"},{url:"icon-192.png",revision:"9cfa986bd58a7e68e7b42431b2472242"},{url:"icon-512.png",revision:"ad7a3103f7dd34bdc4642a277c960023"},{url:"index.html",revision:"8dca9061e5e41f58de5014d40ec01ce0"},{url:"jsinterop/dialogs.js",revision:"d7aad62b759e4b9719246ab12b43cb41"},{url:"jsinterop/wcpiechart.js",revision:"6d57b98857241eb333dea3b69aa6d8e2"},{url:"jsinterop/webcam.js",revision:"f33031ec89c9a0cea04bc2ee231562a9"},{url:"libs/wc-piechart/angular-scripts.js",revision:"c314e763dff1aa158750dd6354a191ca"},{url:"libs/wc-piechart/polyfills.js",revision:"ea279e124b5cf501e59fcaf1599ca11c"},{url:"libs/wc-piechart/wc-piechart.js",revision:"19de24f2069729ae1617f65b98658222"},{url:"manifest.json",revision:"fb6eb1d49286da5a87dcb1db1ef10ab5"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("https://localhost:5001/api/conferences/",new e.NetworkFirst({cacheName:"conferencesApi",plugins:[new e.ExpirationPlugin({maxAgeSeconds:1e3,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=sw.js.map
