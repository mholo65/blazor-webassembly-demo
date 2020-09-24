﻿using Microsoft.Extensions.DependencyInjection;

namespace ConfTool.Modules.Conferences.Services
{
    public static class AlertServiceCollectionExtensions
    {
        public static IServiceCollection AddAlerts(this IServiceCollection services)
        {
            services.AddSingleton<IDialogService, DialogService>();

            return services;
        }
    }
}