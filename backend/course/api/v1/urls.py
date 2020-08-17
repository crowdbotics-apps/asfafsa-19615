from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CategoryViewSet,
    CourseViewSet,
    EnrollmentViewSet,
    EventViewSet,
    GroupViewSet,
    LessonViewSet,
    ModuleViewSet,
    PaymentMethodViewSet,
    RecordingViewSet,
    SubscriptionViewSet,
    SubscriptionTypeViewSet,
)

router = DefaultRouter()
router.register("subscriptiontype", SubscriptionTypeViewSet)
router.register("recording", RecordingViewSet)
router.register("course", CourseViewSet)
router.register("event", EventViewSet)
router.register("paymentmethod", PaymentMethodViewSet)
router.register("subscription", SubscriptionViewSet)
router.register("module", ModuleViewSet)
router.register("category", CategoryViewSet)
router.register("group", GroupViewSet)
router.register("enrollment", EnrollmentViewSet)
router.register("lesson", LessonViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
